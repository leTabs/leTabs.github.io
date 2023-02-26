# heap sorting algorithm

def heap_sorting(array):
    proxy_array = []
    for i in range(len(array)):
        # iterate as many time as the items in the array
        proxy_array.append(min(array))
        # find the smallest value and append it to the proxy array
        array.remove(min(array))
        # remove the smallest value from the original array

    array = proxy_array[:]
    # replace the content of the original array with the proxy's
    # the original now has all it's values sorted
    return array


# testing
unsorted_array = [-10, -5, 3, -2,0,-12, 8, -6, 1, -4, 7, 3, 6, -5]
print(heap_sorting(unsorted_array))

# output: [-12, -10, -6, -5, -5, -4, -2, 0, 1, 3, 3, 6, 7, 8]
