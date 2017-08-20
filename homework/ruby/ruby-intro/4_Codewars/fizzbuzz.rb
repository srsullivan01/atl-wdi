def fizz_buzz_cuckoo_clock(time)
  hours, minutes = time.split(":").map(&:to_i)
  sounds = {0 => (["Cuckoo"] * (hours % 12 or 12)).join(" "), 15 => "Fizz Buzz", 30 => "Cuckoo", 45 => "Fizz Buzz"}
  if sounds.include? minutes
    return sounds[minutes]
  end

  return minutes % 3 == 0 ? "Fizz" : minutes % 5 == 0 ? "Buzz" : "tick"
end
