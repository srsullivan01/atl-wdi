1.  a = true
    b = false
    puts  a == b
    puts a != b

2.  hyenas = nil
    puts hyenas
    puts "#{hyenas}  was here"
    puts #{hyenas}
    puts hyenas.class

3.  d = 19
    puts d
    e = 19.19
    puts e
    d = e
    puts d

4.  christine = "Hi, I'm Christine"
    likesTo = "long walks on the beach, kinda."
    tims = " and I "
    puts christine + tims + likesTo
    g = "2"
    gToNumber = 2
    puts g.to_i + gToNumber

5.  puts "What should I call you?"
    name = gets.chomp
    puts "What are your hobbies?"
    hobbies = gets.chomp
    puts "I see. Your name is #{name} and your hobbies are #{hobbies}"
