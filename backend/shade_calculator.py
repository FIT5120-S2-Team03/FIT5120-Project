from shapely.geometry import LineString, Point
from shapely.ops import transform
from pyproj import Transformer


def calculate_shade_coverage(route_coordinates, tree_coordinates):
    """
    Calculate shade coverage percentage for a route.

    route_coordinates:
        [(lng, lat), (lng, lat), ...]

    tree_coordinates:
        [(lng, lat), (lng, lat), ...]

    return:
        shade coverage percentage from 0 to 100
    """

    if route_coordinates is None or len(route_coordinates) < 2:
        return 0

    if tree_coordinates is None or len(tree_coordinates) == 0:
        return 0

    route_line = LineString(route_coordinates)

    transformer = Transformer.from_crs("EPSG:4326", "EPSG:3857", always_xy=True)

    route_line_meters = transform(transformer.transform, route_line)

    total_length = route_line_meters.length

    if total_length == 0:
        return 0

    shaded_length = 0

    for tree in tree_coordinates:
        lng = tree[0]
        lat = tree[1]

        tree_point = Point(lng, lat)
        tree_point_meters = transform(transformer.transform, tree_point)

        # Assume each tree provides shade within 8 metres
        shade_area = tree_point_meters.buffer(8)

        shaded_part = route_line_meters.intersection(shade_area)
        shaded_length = shaded_length + shaded_part.length

    shade_coverage = shaded_length / total_length * 100

    if shade_coverage > 100:
        shade_coverage = 100

    return round(shade_coverage, 2)


if __name__ == "__main__":
    sample_route = [
        (144.9631, -37.8136),
        (144.9640, -37.8140),
        (144.9650, -37.8150)
    ]

    sample_trees = [
        (144.9640, -37.8140),
        (144.9660, -37.8160)
    ]

    result = calculate_shade_coverage(sample_route, sample_trees)
    print("Shade coverage:", result, "%")
