export default async function getPostText() {
  // Get current time for time-based greetings
  const hour = new Date().getHours();
  const date = new Date();

  // Collection of bunny jokes
  const bunnyJokes = [
      "Why don't bunnies tell jokes? Because they're afraid of hare-raising experiences! 🐰",
      "What's a bunny's favorite music? Hip Hop, of course! 🎵🐰",
      "Why did the bunny bring a ladder to tea? Because she heard it was High Tea! ☕️🐰",
      "What do you call a rabbit with fleas? Bugs Bunny! 🐰✨",
      "How does a rabbit stay healthy? Hare-obics! 🏃‍♂️🐰",
      "What's a bunny's favorite kind of story? A hare-raising tale! 📚🐰",
      "Why don't bunnies tell jokes? Because they're afraid of hare-raising experiences! 🐰",
      "What's a bunny's favorite music? Hip Hop, of course! 🎵🐰",
      "Why did the bunny bring a ladder to tea? Because she heard it was High Tea! ☕️🐰",
      "What do you call a rabbit with fleas? Bugs Bunny! 🐰✨",
      "How does a rabbit stay healthy? Hare-obics! 🏃‍♂️🐰",
      "What's a bunny's favorite kind of story? A hare-raising tale! 📚🐰",
      "What did the rabbit say to the carrot? It's been nice gnawing you! 🥕🐰",
      "What's a rabbit's favorite dance? The Foxtrot... just kidding, the Hop! 💃🐰",
      "Why did the bunny cross the road? To prove it wasn't chicken! 🐔🐰",
      "What do you call a rabbit magician? A Hare Houdini! 🎩🐰",
      "What's a bunny's favorite game? Hop-scotch! 🎮🐰",
      "Why was the rabbit so grumpy? Someone called him an ears-dropper! 👂🐰",
      "What do you call a rabbit who tells good jokes? A funny bunny! 😄🐰",
      "Why don't rabbits use dating apps? They already have plenty of hare-followers! 💘🐰",
      "What's a bunny's favorite subject in school? Ears-tory! 📖🐰"
  ];

  // Collection of bunny facts
  const bunnyFacts = [
      "Did you know? Bunnies can hop up to four feet high! 🦘🐰",
      "Bunny fact: A rabbit's teeth never stop growing! That's why they need to chew so much! 🥕",
      "Fun fact: A happy bunny will jump and twist in the air - it's called a 'binky'! 🐰✨",
      "Did you know? Bunnies have nearly 360-degree vision but they can't see directly in front of their nose! 👀🐰",
      "Bunny fact: Rabbits purr when they're happy, just like cats! 🐰💕",
      "Wild rabbits perform an acrobatic jump called a 'binky' when they're extremely happy, leaping into the air and twisting their bodies! 🦘🐰",
      "A rabbit's teeth never stop growing! They wear them down by chewing on hay and other fibrous plants 🦷🐰",
      "Bunnies can see almost 360 degrees around them, but they have a small blind spot right in front of their nose 👀🐰",
      "A happy rabbit will softly grind their teeth, making a sound similar to a cat's purr - it's called 'tooth purring'! 😊🐰",
      "Rabbits have powerful hind legs that allow them to jump up to four feet high and nine feet horizontally! 🦿🐰",
      "Baby rabbits are called kits or kittens, and a female rabbit is called a doe while a male is called a buck 👶🐰",
      "A rabbit's ears can be up to 4 inches long and contain an extensive network of blood vessels to help regulate body temperature 🌡️🐰",
      "Rabbits are crepuscular, meaning they are most active at dawn and dusk rather than day or night 🌅🐰",
      "A group of wild rabbits living together is called a colony, while a group of domestic rabbits is called a herd 👥🐰",
      "Rabbits have nearly 360-degree vision but are born with their eyes closed, only opening them after about 10 days 👁️🐰",
      "Bunnies can't vomit! Their digestive system is designed to only work in one direction 🥕🐰",
      "A happy rabbit will sometimes flop onto their side - this is called a 'dead bunny flop' and means they feel completely safe 😴🐰",
      "Rabbits can jump up to 4 feet high and 15 feet long in a single bound! Talk about getting some air! 🎯🐰",
      "A rabbit's nose can move up to 120 times per minute when they're actively sniffing something interesting! 👃🐰",
      "Unlike humans, rabbits can't sweat! They release heat through their ears, which contain a network of tiny blood vessels 🌡️🐰",
      "Each rabbit has a unique personality, just like cats and dogs. Some are outgoing, while others are shy and reserved 🎭🐰",
      "A rabbit's field of vision spans nearly 360 degrees, allowing them to see behind themselves without turning their head! 🔄🐰",
      "Wild rabbits can run up to 35 miles per hour - that's faster than the average house cat! 🏃‍♂️🐰",
      "The average lifespan of a domestic rabbit is 8-12 years, making them a long-term companion! 📅🐰",
      "Rabbits are social animals and can become depressed if kept alone - they love having bunny friends! 💕🐰"  
  ];

  // Collection of cute bunny messages
  const bunnyMessages = [
      "Hop into happiness today! 🐰💫",
      "Every bunny deserves a wonderful day! 🌟🐰",
      "Sending some bunny love your way! 💕🐰",
      "Time to hop to it! Let's make today amazing! 🐰✨",
      "Remember: you're some bunny special! 🌈🐰",
      "Hop into happiness today! Every small jump counts 🐰💫",
      "Your daily reminder: You're as special as a bunny in a field of flowers! 🌸🐰",
      "Sending fluffy bunny vibes your way! May your day be as soft as rabbit fur 🐰✨",
      "Time to bounce into action like a springtime bunny! 🌱🐰",
      "Remember: Life is better with bunny-sized hops of joy 🎀🐰",
      "Sprinkle some bunny magic into your day! ✨🐰",
      "Hop, skip, and jump your way through today's adventures! 🌈🐰",
      "Carrying good luck in my lucky rabbit's foot (metaphorically, of course!) 🍀🐰",
      "Spreading whisker wisdom and fluffy fortunes your way 🌟🐰",
      "Today's motto: Be as curious as a bunny in a new garden 🌺🐰",
      "Channel your inner bunny: gentle, resilient, and absolutely adorable 💝🐰",
      "Let's make today as energetic as a bunny's first binky! 🎈🐰",
      "Sprinkling some bunny dust for extra luck today ⭐🐰",
      "Hop through your day with the grace of a show bunny! 🎭🐰",
      "Sending nose boops and bunny loops your way! 👆🐰"
  ];

  // Get day of the week (0-6)
  const dayOfWeek = date.getDay();
  
  // Determine what type of message to send based on the day
  let message = '';
  
  switch (dayOfWeek) {
      case 1: // Monday
          message = `Monday Motivation: ${bunnyMessages[Math.floor(Math.random() * bunnyMessages.length)]}`;
          break;
      case 3: // Wednesday
          message = `Wisdom Wednesday! ${bunnyFacts[Math.floor(Math.random() * bunnyFacts.length)]}`;
          break;
      case 5: // Friday
          message = `Friday Fun: ${bunnyJokes[Math.floor(Math.random() * bunnyJokes.length)]}`;
          break;
      default: // Other days - mix it up!
          const contentType = Math.floor(Math.random() * 3);
          if (contentType === 0) {
              message = bunnyJokes[Math.floor(Math.random() * bunnyJokes.length)];
          } else if (contentType === 1) {
              message = bunnyFacts[Math.floor(Math.random() * bunnyFacts.length)];
          } else {
              message = bunnyMessages[Math.floor(Math.random() * bunnyMessages.length)];
          }
  }

  // Add time-based greeting
  let greeting = '';
  if (hour < 12) {
      greeting = "🌅 Good morning, every bunny!";
  } else if (hour < 17) {
      greeting = "🌞 Good afternoon, hop-timists!";
  } else {
      greeting = "🌙 Good evening, night bunnies!";
  }

  // Format the final message
  const formatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
  });

  return `${greeting}\n${formatter.format(date)}\n\n${message}\n\n🐰 Hop along now! ✨`;
}