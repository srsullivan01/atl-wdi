def dominator(arr)
  my_arr = arr.uniq
  solution = my_arr.select {|item| arr.count(item) > arr.length/2}
  solution.empty? ? -1 : solution[0]
end
