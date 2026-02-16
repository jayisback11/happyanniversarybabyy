// Mock data for the anniversary website

export const mockData = {
  photos: {
    hero: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
    couple1: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80",
    couple2: "https://images.unsplash.com/photo-1522673607211-8f8e4f7b8b1c?w=800&q=80",
    sunset: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1200&q=80",
  },

  video: {
    placeholder: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&q=80"
  },

  music: {
    // Placeholder for background music URL
    url: null,
    title: "Our Song"
  },

  dates: {
    anniversary: "February 17, 2026",
    firstHi: "11/19/2024",
    nextSeventeenth: null // Will be calculated
  },

  letter: {
    opening: "Dear babyy ko,",
    paragraphs: [
      "Nag iisip ako ng perfect letter for our anniversary, pero honestly? Perfection isn't really 'us.' We’re thousands of miles apart, mag kaibang time zone, stress ka sa school, and all the heavy stuff life likes to throw at you. It’s not perfect—it’s hard.",

      "But na-realize ko something this year: I’d rather have a hard day with you than a 'perfect' day with anyone else.",

      "I know how much you’re juggling right now. I see you pushing through school even when pagod ka, and I see you dealing with things from your past that most people wouldn't understand. I just wanted to remind you na I’m always here babyy.",

      "You don’t have to be the busy student or the girl who’s 'fine.' You can be tired. You can be grumpy. You can be a total mess. Dito lang ako and I’m not going anywhere.",

      "It sucks lang na I can’t be there to actually hold you when things get heavy po. It’s the worst feeling in the world to see you hurting and not be able to hug you. Pero kahit mag kalayo tayo, you are the closest person to me.",

      "You’re the first thing I want to talk to when I wake up and the last thing I think about before I sleep. I’m so proud of you babyy. Not just for the school stuff, but for how you handle everything. For being you po.",

      "Every 17th isn't just a date on the calendar anymore. It’s a celebration. A reminder that we’re building something that distance can’t destroy. Most people wait a year to celebrate babyy, but we do it twelve times over, because loving you isn't a once-a-year feeling—it's every single day.",

      "I’m counting down the days until 'goodnight' isn't a text message anymore, but something I get to whisper to you in person. Until then, just know I’m right here, cheering you on and loving you more than you probably realize.",

      "You are worth every mile, every lonely night, and every moment of missing you. I would choose this distance a thousand times if it always led me back to you.",

      "Thank you for the best year of my life, Babyy."
    ],
    closing: "Forever yours,\nThe one who loves you across any distance"
  }
};

// Helper to calculate next 17th
export const getNextSeventeenth = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  let nextMonth = currentMonth;
  let nextYear = currentYear;

  if (currentDay >= 17) {
    nextMonth = currentMonth + 1;
    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear = currentYear + 1;
    }
  }

  return new Date(nextYear, nextMonth, 17);
};
