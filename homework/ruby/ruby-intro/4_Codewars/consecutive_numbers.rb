def consecutive(arr)
  arr.empty? ? 0 : arr.sort!.last-arr.first-arr.size+1
end
