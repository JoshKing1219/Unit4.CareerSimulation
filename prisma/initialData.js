const { Type } = require("@prisma/client");

const usersArray = [
  {
    username: "TinfoilHatMan",
    password: "ReaganIsJesus81",
    first_name: "Joseph",
    last_name: "Brolins",
  },
  {
    username: "AliensAreReal",
    password: "Roswell1947",
    email: "theyareoutthere@gmail.com",
    first_name: "Markus",
    last_name: "DeMarcus",
  },
  {
    username: "AbolishTheCIA",
    password: "Kennedy1963",
    first_name: "Billy",
    last_name: "Bob",
  },
];

const theoryArray = [
  {
    title: "Kennedy Was Assassinated By The CIA",
    description:
      "Likely one of the exceptionally few conspiracy theories that could be true, a great number of Americans believe that the Central Intelligence Agency (CIA) assassinated the 35th President, John F. Kennedy. Theorists believe that the United States Government ordered the assassination because of a wide range of reasons all boiling down to one fact: he was too progressive. JFK was largely anti-war despite serving at the height of the Cold War and engaging in foreign military conflicts. Kennedy's anti-war stance, especially in Vietnam, led to a growing gap between him and the Warmongers in D.C. It is because of this conflict of interest that a great number of Americans to this day still believe this theory. This theory is also further supported by Lyndon B. Johnson's succession into the Presidency, and his largely unpopular warmongering tactics among the American People, following Kennedy's assassination. While there may be evidence to support this theory it is important to remember that everything online should be taken with a grain of salt.",
    image_url:
      "https://d.newsweek.com/en/full/2165595/cia-wants-some-jfk-files-redacted.jpg",
    type: Type.Politics,
  },
  {
    title: "The Moon Landing Was Faked",
    description:
      "Swept up in the Cold War with the Soviet Union, the United States of America funneled pools of funding into space exploration in an effort to beat the Soviets to the Moon. Eventually the United States managed to beat the Soviets and landed the first man on the moon. However, conspiracy theorists believe that NASA and the U.S. Government staged the moon landing footage in order to bolster public morale and induce a wave of Nationalism in the American people. They further support this theory by claiming that the United States never had the financial resources to travel to the Moon and had to stage the landing so as to not permanently damage the faith the American People had in the Government as well as NASA & Space Exploration. While there is no evidence to support this theory, a great number of Americans still cling to it.",
    image_url:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/apollo-11-moon-landing-190417148-16x9_0.jpg?VersionId=Hkrlq9ee2i_lY8Ul7yoDOAqIek_C1CF",
    type: Type.Science,
  },
  {
    title: "The Nazis Had A Secret Base in Antarctica",
    description:
      "A Nazi expedition to Antarctica in 1938-39, coupled with storiess of Nazi interest in occultism, led the German public to believe that Nazi Germany had a secret base on the frozen continent during the Second World War. As early as the 1950s, rumors began to circulate within certain German political circles that recent UFO sightings were in fact Nazi super-weapons that were in development by the 3rd Reich in Antarctica. Continued sightings of UFOs lead many to believe that there were Nazi powers still in play in remote corners of the world. No evidence was ever found to support any of these claims.",
    image_url:
      "https://hips.hearstapps.com/hmg-prod/images/vintage-map-of-amundsen-and-scotts-south-pole-expedition-news-photo-1615230103.?crop=1xw:1xh;center,top&resize=980:*",
    type: Type.Science,
  },
  {
    title: "Martin Luther King Jr. Was Assassinated By The FBI",
    description:
      "Famous for his I Have A Dream speech and his historic work with Civil Rights, Martin Luther King Jr. was assassinated in 1968. Many conspiracy theorists do not believe the reports that were released regarding the assassination and instead believe that the Federal Bureau of Investigation (FBI) assassinated him. They believe the FBI did this in an attempt to further divide White and African Americans and install a new fear of Communism in the Nation. While it is unclear what theorists truly believe was the end-goal of the assassination, they hold true to this theory due to the FBI's Director at the time, J. Edgar Hoover, stating to the Attorney General that they had evidence of MLK being a secret member of the Communist party. There is no true evidence to support their theory and J. Edgar Hoover's reason for slandering MLK can be simplified to racism and possible sexual identity supression.",
    image_url:
      "https://assets.editorial.aetnd.com/uploads/2009/11/hero-crop-gettyimages-459534214.jpg",
    type: Type.Politics,
  },
  {
    title: "9/11 Was An Inside Job",
    description:
      "One of the most popular modern conspiracy theories, a fair number of American People believe that the Semptember 11th Terrorist Attack on the World Trade Center was not the work of Al-Queda terrorists but instead the work of the U.S. Government and 43rd President, George W. Bush. While this theory intially started as a meme created by late Millenials and early Gen Z, it caught fire and caused many Americans to truly believe that President Bush was behind the attack in order to gain public approval to start a war with the Middle East. The 9/11 Terrorist Attacks cost nearly 3000 Americans their life and while it is still a tragedy, many Americans have lost faith in their Government which has caused more citizens to believe this theory each year. There is no evidence to support the belief that the U.S. Government would carry out an act of terrorism against it's own citizens to justify a war with a foreign power.",
    image_url:
      "https://d.newsweek.com/en/full/2280007/september-11-2001.jpg?w=1600&h=900&q=88&f=eeb6953c16771c62a13a193655cbdbba",
    type: Type.Politics,
  },
  {
    title: "The COVID-19 Quarantine Was A New World Order Plot",
    description:
      "By far one of the most outlandish conspiracy theories to emerge within the past 5 years, some theorists believe that a secret international organization of politicians and billionaires orchestrated the COVID-19 Pandemic in an effort to gain more control over the citizens of various first-world nations. These theorists believe that this secret organization fueled the media, primarily in Europe and the United States, with false data to trick the masses into panicking and listening to anything their government tells them to do. The theorists further support their beliefs with the claim that mass shutdowns and mandatory isolation made people more submissive and easier to control. Some theorists have referred to the COVID-19 Quarantine as the biggest social experiment in history. While the full truth about COVID-19 may be hidden from the public, there is certainly no evidence to support any claims made by this theory.",
    image_url:
      "https://img.ehstoday.com/files/base/ebm/ehstoday/image/2020/12/COVID_quarantine.5fd3c3a2de5a1.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630",
    type: Type.Society,
  },
  {
    title: "Lizard People Control The Government",
    description:
      "A great many people believe that the elitists and world leaders of the world are actually Lizard People. Yes, you read that correctly. Theorists actually believe that the wealthiest and most powerful people are in fact reptilian-humanoid hybrids who are part of a Cabal to consolidate power and control the Human Beings of Earth. Many conspiracy theorists support their belief in this theory based on wild claims that global elites have been spotted in their reptilian form or simply don't speak like normal people. It is incredibly important to understand that Lizard People do not exist and there is no proof supporting any of their irrational claims.",
    image_url:
      "https://newsofthenight.org/wp-content/uploads/2023/11/lizardpeopleinpolitics.jpg?w=922",
    type: Type.Politics,
  },
  {
    title: "The Earth Is Flat",
    description:
      "Whether it be satire or just blind belief, there are an astonishing number of people that believe the Earth is not round but flat. Theorists believe that NASA and othe global elites have doctored footage and images of the Earth from space to make people believe that the Earth is round. Modern Flat Earth Theory originated in 1956 when Samuel Shenton set up the Flat Earth Society as a direct descendant to the original society that was founded in 1893. While it is unclear why modern Flat Earthers believe that countless sources would lie about Earth's sphericity, it is important to note that the Flat Earth theory was originally an archaic belief to better explain Earth's shape that has been disproven for centuries.",
    image_url:
      "https://www.indiewire.com/wp-content/uploads/2024/06/GettyImages-1473175595.jpg",
    type: Type.Science,
  },
  {
    title: "We Live In The Matrix",
    description:
      "The 1999 blockbuster The Matrix was a Sci-Fi film centered around the concept of a dystopian future where the Human Race is unknowingly harvested of their energy by intelligent machines while they are trapped inside of a simulated reality. Conspiracy theorists took this film to heart and believe that the concept of the movie is real and that the world we experience daily is nothing more than a simulated reality. There is no evidence that supports that theory and belief in such concepts border on delusion.",
    image_url: "https://xenogothic.com/wp-content/uploads/2020/07/zymac.gif",
    type: Type.Society,
  },
  {
    title: "The Moon Is An Egg",
    description:
      "Some conspiracy theorists believe that Earth's Moon was crafted by an alien civilization to house an alien creature within it. They believe that one day the Moon's crust will crack and the creature will hatch from it and devour the Earth. There has been seismic observations and other data that has been collected from the Moon that does in fact prove that this theory is far from the truth.",
    image_url:
      "https://live.staticflickr.com/7051/13922744042_9e3e2b6207_z.jpg",
    type: Type.Space,
  },
  {
    title: "The Moon Isn't Real",
    description: "/NULL",
    image_url:
      "https://hips.hearstapps.com/hmg-prod/images/close-up-image-of-full-moon-as-seen-in-the-northern-royalty-free-image-1666114330.jpg?crop=1.00xw:0.669xh;0,0.0620xh&resize=1200:*",
    type: Type.Space,
  },
  {
    title: "The Government Controls The Weather",
    description: "/NULL",
    image_url:
      "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_weather_control.png",
    type: Type.Weather,
  },
  {
    title: "5G Causes Cancer",
    description: "/NULL",
    image_url:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/ezgif-sixteen_nine_230.jpg?size=1200:675",
    type: Type.Science,
  },
  {
    title: "Airplanes Exhaust Trails Are Actually Chemtrails",
    description: "/NULL",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Contrail.fourengined.arp.jpg",
    type: Type.Science,
  },
  {
    title: "The New World Order",
    description: "/NULL",
    image_url:
      "https://assets.weforum.org/article/image/large_WDju9joRIbqFGmICCCtBPwWvnmxir3-mSa09G95VhZQ.jpg",
    type: Type.Society,
  },
  {
    title: "Birds Are Government Drones",
    description: "/NULL",
    image_url: "https://www.mvnews.org/wp-content/uploads/2020/01/drird.jpg",
    type: Type.Society,
  },
  {
    title: "Area 51 Experiments On Aliens & Alien Technology",
    description: "/NULL",
    image_url: "https://cdn.mos.cms.futurecdn.net/7ya4qrHsoArDh8nFxzB87U.jpg",
    type: Type.Aliens,
  },
  {
    title: "Aliens Landed in Roswell, New Mexico",
    description: "/NULL",
    image_url:
      "https://www.worldatlas.com/upload/be/6e/07/shutterstock-1372964045.jpg",
    type: Type.CoverUps,
  },
  {
    title: "H. H. Holmes and Jack the Ripper Were The Same Person",
    description: "/NULL",
    image_url:
      "https://www.historicmysteries.com/wp-content/uploads/2020/07/holmes-2-e1595240828684.jpg",
    type: Type.Society,
  },
  {
    title: "Aliens Built The Pyramids",
    description: "/NULL",
    image_url:
      "https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/160/459/BRAND_THC_ACTA_192055_TVE_000_2398_60_20170530_00_HD.jpg",
    type: Type.Aliens,
  },
  {
    title: "Zionists Control The World Economy",
    description: "/NULL",
    image_url:
      "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20230429_MAP001.jpg",
    type: Type.Religion,
  },
  {
    title: "The Vatican Altered The Bible To Contol The Masses",
    description: "/NULL",
    image_url:
      "https://cdn-imgix.headout.com/microbrands-content-image/image/4c39598de5ac2156718d098ce5e26a26-Plan%20your%20Visit.jpg",
    type: Type.Religion,
  },
  {
    title: "Dead Internet",
    description: "/NULL",
    image_url:
      "https://imageio.forbes.com/specials-images/imageserve/65a6a01b222d22aae407b511/The-Dead-Internet-Theory/960x0.jpg?format=jpg&width=960",
    type: Type.Science,
  },
  {
    title: "The George Bush v. Al Gore Election Was Rigged",
    description: "/NULL",
    image_url:
      "https://assets.teenvogue.com/photos/5f8888f221f250e0096e80d3/16:9/w_2560%2Cc_limit/next%2520presidential%2520debate%2520donald%2520trump%2520joe%2520biden%2520how%2520to%2520watch%2520teen%2520vogue%2520social.jpg",
    type: Type.Politics,
  },
  {
    title: "The RMS Titanic and RMS Olympic Were Swapped",
    description: "/NULL",
    image_url:
      "https://qph.cf2.quoracdn.net/main-qimg-e6ee67b837dbbad502bd057c5e381cc6",
    type: Type.CoverUps,
  },
];

module.exports = {
  usersArray,
  theoryArray,
};
