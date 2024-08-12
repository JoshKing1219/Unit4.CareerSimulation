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
    description:
      "No, the title isn't satire. There are some conspiracy theorists around that think the Moon is a holographic projection from a U.S. Government satellite. Their belief in this is rooted in claims that there are at times two moons in the sky or photographs that supposedly depict inconsitencies between NASA photos and eye-witness views of the Moon. While there may not be many people that truly believe the Moon simply doesn't exist, it is incredibly improtant to consider the physical samples we have aquired from the Moon and the irrefutable science linking the Moon and the oceans of Earth.",
    image_url:
      "https://hips.hearstapps.com/hmg-prod/images/close-up-image-of-full-moon-as-seen-in-the-northern-royalty-free-image-1666114330.jpg?crop=1.00xw:0.669xh;0,0.0620xh&resize=1200:*",
    type: Type.Space,
  },
  {
    title: "The Government Controls The Weather",
    description:
      "Weather modification has been a topic of discussion among scientists since the 1950s as a means to prevent dangerous severe weather, such as tornados and hurricanes, or as a means of warfare. Use of weather modification in warfare was outlawed by the United Nations when the United States launched Operation Popeye during the Vietnam War in an attempt to prolong monsoons. Weather modification has since evolved and been refined which has lead many people to believe that the United States Government, and other first-world governments, have utilized this techhnology to cause natural disasters in large population centers. They believe that in doing so it triggers a wave of sympathy from across their respective nation, sometimes gaining international support, and in turn causes a surge in various funding that they can siphon off of. Weather modification technology, such as cloud seeding, does exist and scientists may still be continuing to develop more ways to curb natural disasters in order to protect the public, but there is no evidence to support the claim that the U.S. Government, or any government for that matter, has total control over the weather. Any abnormal weather patterns can simply be attributed to Mankind's growing impact on the planet and a resulting change in the climate.",
    image_url:
      "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_weather_control.png",
    type: Type.Weather,
  },
  {
    title: "5G Causes Cancer",
    description:
      "The implication of 5G technology causing cancer, or any other disease, is one of the most important modern examples of the dangers of misinformation. Conspiracy theorists who spread misinformation about 5G techhnology base their claims around the irrational belief that the technology spreads increased electromagnetic radiation throughout the world. There is no evidence that supports their claims and the existence of many regulations around possibly harmful technology further proves that 5G technology does not and has not posed any risk to public health. Misinformation regarding 5G technology is commonly spread by the public and celebrities on social media so it is important to always fact check everything you read online that isn't published by a reliable, non-biased, and properly vetted source.",
    image_url:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/ezgif-sixteen_nine_230.jpg?size=1200:675",
    type: Type.Science,
  },
  {
    title: "Airplanes Exhaust Trails Are Actually Chemtrails",
    description:
      "Airplanes release what are known as water condensation trails as they travel through the sky. These trails, or contrails as they are sometimes known, can be seen leaving a white streak across the sky followed by the disappation of the condenstaion. It is estimated that about 17% of people around the world believe that the contrails from an airplane is not condensation but instead a cocktail of chemical and biological agents that is toxic to the public and alters their brain chemistry. Atmospheric scientists recently studied the Chemtrail Theory and found that there is no evidence of any toxic or foreign agents within an airplane's contrails.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Contrail.fourengined.arp.jpg",
    type: Type.Science,
  },
  {
    title: "The New World Order",
    description:
      "A great many people across the globe believe that a group of international elites control governments, the means of production, and most media organizations in order to establish a global regime that favors the wealthy above all else. Conspiracy theorists believe that this group has had a hand in most major conflicts over the past century and even secretly staged events to manipulate the various economies of the world. Theorists suspect that the Illuminati, the Zionists within the Israeli government, various corporations, and various other groups are all connected to the New World Order. The existence of a global group of elites, that seek to control the whole of Humanity for their own self-interests, is impossible to both prove and disprove; however, if such a group were to exist, it is safe to assume that any evidence of it's existence, or connections to it's existence, would not be able to be found simply due to the implication that the group would have control over all media.",
    image_url:
      "https://assets.weforum.org/article/image/large_WDju9joRIbqFGmICCCtBPwWvnmxir3-mSa09G95VhZQ.jpg",
    type: Type.Society,
  },
  {
    title: "Birds Are Government Drones",
    description:
      "This conspiracy theory is relatively new and started as satire during the 2017 Women's March in Memphis, Tennessee when Peter McIndoe wrote Birds Aren't Real on a poster. Peter improvised the Birds Aren't Real Theory as a joke amongst Pro-Trump Counter-Protestors. The theory stated that birds are actually government drones that are used to spy on the American Public and after it went online it went viral. There are some people that have come to truly believe this theory over the years and they support their claims with supposed declassified C.I.A. documents that related to using birds as cameras to spy on enemies during wartime. There is no evidence to support their claims in this theory and it is important to remember that this theory was intended to be satirical and not taken seriously.",
    image_url: "https://www.mvnews.org/wp-content/uploads/2020/01/drird.jpg",
    type: Type.Society,
  },
  {
    title: "Area 51 Experiments On Aliens & Alien Technology",
    description:
      "After the supposed alien crash landing in Roswell, New Mexico, conspiracy theorists began to believe that the top secret government facility, Area 51, experiments on crashed and seized alien spacecrafts. Theorists believe that U.S. Government related organizations reverse-engineer the alien techhnology and some even believe that they experiment with Time Travel. Theorists base their claims around the highly sensitive and mysterious nature of the facility, increased supposed UFO sightings in the area, and a testimony from a retired Army colonel who said he was given access to alien materials recovered from the Roswell crash site. Area 51 is classified for purposes of national security and not to lie to the public about the existence and development of alien technology. Any claims and/or supposed evidence supporting this theory is merely an attempt to gain social fame and attention due to the public's increased interest with the facility. It is natural to be curious about a highly-classified facility, but it is not okay to spread misinformation about it.",
    image_url: "https://cdn.mos.cms.futurecdn.net/7ya4qrHsoArDh8nFxzB87U.jpg",
    type: Type.Aliens,
  },
  {
    title: "Aliens Landed in Roswell, New Mexico",
    description:
      "The Roswell Incident is a conspiracy theory which claims the United States Army Air Force's balloon that crashed in Roswell, New Mexico, was truly an alien spacecraft. Part of the top secret Project Mogul, and launched from Alamogordo Army Air Field, the balloon was intended to detect Soviet nuclear tests. The Army foolishly announced the recovery of metallic and rubber debris as a 'flying disc' without revealing the true purpose of the balloon. The announcement made international headlines and was retracted within a day, but it didn't stop the public from spreading misinformation about the situation. The U.S. Army didn't help the situation when they subsequently stated that it was a conventional weather balloon. The most popular theory that arose from the situation was that an alien spacecraft crashed in Roswell which led to other alien related theories, such as Area 51 Experiments on Aliens. There is no valid evidence that aliens crashed near Roswell and this scenario can be explained by simple miscommunication and poor planning from the U.S. Army.",
    image_url:
      "https://www.worldatlas.com/upload/be/6e/07/shutterstock-1372964045.jpg",
    type: Type.CoverUps,
  },
  {
    title: "H. H. Holmes and Jack the Ripper Were The Same Person",
    description:
      "H. H. Holmes was America's first serial killer and architect of the infamous Murder Castle. The Murder Castle was built to lure and trap young females where Holmes would later kill them. Jack the Ripper was a notorious English serial killer that preyed on female prostitutes, went uncaught and remains one of the greatest unsolved mysteries in history. Conspiracy theorists believe that the overlap in the timeline of the two serial killers' activity, and the similar victimology, supports their belief that the two killers were in fact the same person. There are various documentaries that explores the relation bewteen the timelines of the two killers but there is no concrete evidence confirming that they were the same person. Due to the sheer length of time since the killings of Holmes and Jack it is unlikely that we will ever discover the true identity of Jack the Ripper and if they were also H. H. Holmes.",
    image_url:
      "https://www.historicmysteries.com/wp-content/uploads/2020/07/holmes-2-e1595240828684.jpg",
    type: Type.Society,
  },
  {
    title: "Aliens Built The Pyramids",
    description:
      "This conspiracy theory is supported by pseudo-archeology and is not entertained by credible scientists. It is the belief that aliens visited Mankind during ancient times and assisted humans in technological and architectual advancements. Theorists believe that monuments such as the Pyramids in Egypt were crafted by aliens and imbued with their technology in an attempt to link all temples across the globe. These outlandish theories are largely spread by media like T.V. shows and movies such as Ancient Aliens on the History Network. There is absolutely no evidence to suggest that aliens once visited Mankind and any such notions can be explained with the scientifically supported, and actively investigated, theory that Mankind was once far more advanced than we are now and experienced an event that triggered a societal and technological reset.",
    image_url:
      "https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/160/459/BRAND_THC_ACTA_192055_TVE_000_2398_60_20170530_00_HD.jpg",
    type: Type.Aliens,
  },
  {
    title: "Zionists Control The World Economy",
    description:
      "Spurred on by increased antisemitism towards the Jewish people prior to and during the 2nd World War, this theory claims that Zionists control the economies of the world to support their own self-interests and financial gain. Zionism was a movement started in the late 19th Century that called for the colonization of Palestine for the Jewish homeland and was supported by religious proclamations that the Palestinian land was the Holy Land and belonged to the Jewish people. In the 1920s the British occupation of Palestine allowed British colonial policy to immigrate the Jewish people into occupied Palestine which started the still ongoing conflict between the Jewish people and the surrounding Arab nations. Following the genocide of the Jewish people during the 2nd World War, the United Nations adopted Resolution 181 (II) which called for the establishment of independent Jewish and Arab states that were linked economically. The resolution was adopted in November of 1947 and the State of Israel, which declared it's establishment in March of 1948, has since been locked in a civil war with the surrounding Arab nations. In recent years, the public of most nations across the globe have begun to separate Jewish and Zionist ideologies as well as villify Zionism due to the Israeli genocide of the Palestinian People. This growing hatred for Zionism, and the public beginning to label the ideology as a terrorist movement, has sparked an increase of belief in this theory. It is imperative to understand the dangers of hateful ideologies as such beliefs often lead to increased radicalism and violence amongst the public.",
    image_url:
      "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20230429_MAP001.jpg",
    type: Type.Religion,
  },
  {
    title: "The Vatican Altered The Bible To Contol The Masses",
    description:
      "Notions of the Vatican altering the Bible arose when the public began spreading supposed evidence of lost Bibles with passages that contradicted the Bible that's available globally. Many people across various social media platforms spread misinformation about contradictory passages in the Bible and how it supports their theory that the Vatican altered the text inside. They claim that the Vatican did this in an effort to control the limited masses of Europe at the time and bring conformity to Christianity which was splitting into various sects during the proposed time of alteration. It is important to understand that all religious texts have contradictory passages and have many different variations as time progressed. Between translation barriers amongst the various cultures throughout history and the gaps in languages it is not hard to believe that some things were lost in translation or simply mistranslated. There is no evidence to support the belief that the Vatican altered the Bible in order to control the masses and bring conformity to Christianity.",
    image_url:
      "https://cdn-imgix.headout.com/microbrands-content-image/image/4c39598de5ac2156718d098ce5e26a26-Plan%20your%20Visit.jpg",
    type: Type.Religion,
  },
  {
    title: "Dead Internet",
    description:
      "The Dead Internet Theory is an online conspiracy theory with growing popularity that claims the Internet consits mainly of auto-generated content and bot activity. The theory further claims that this content and bot activity is manipulated by alogirthms designed to manipulate the population and minimize organic human activity online. Theorists believe that this was done either by Corporations in an effort to push more products to consumers, or by the Government to manipulate public perception of certain events. Theorists believe that the supposed 'death' of the Internet happened some time around 2016 to 2017. Some elements of the theory can be validly supported by an increase in bot activity over the years, but there is no credible evidence to support the full theory. An increase in auto-generated content and bot activity can likely be explained by the sharp increase and rapid development of A.I. technology and Mankind's inability to contain the chaos and power of A.I. in the early stages of it's development. It is critical to always consider all possibilities when encountering possible misinformation.",
    image_url:
      "https://imageio.forbes.com/specials-images/imageserve/65a6a01b222d22aae407b511/The-Dead-Internet-Theory/960x0.jpg?format=jpg&width=960",
    type: Type.Science,
  },
  {
    title: "The George Bush v. Al Gore Election Was Rigged",
    description:
      "With escalating tensions in the Middle East post-Cold War, the 2000 American Presidential Election is viewed by some as the turning point for modern America and it's involvement in Middle Eastern affairs. The Florida Supreme Court had ordered a statewide recount of all undervotes that the vote tabulation machines had missed, but Geroge Bush and his campaign had the recount halted. This action casted doubt on the legitimacy of the Bush Administration and subsequently led many Americans to believe, and still believe, that Bush stole the Presidency from his opponent, Al Gore, in order to further his selfish interests and later stage a terrorist attack on American soil to justify a war with the Middle East. There is no concrete evidence that George Bush did steal the election from Al Gore, but that doesn't stop many Americans from believing in such things. Until the United States Government collapses or reforms in however many years we will never know the full truth behind the actions of American politicians and government officials.",
    image_url:
      "https://assets.teenvogue.com/photos/5f8888f221f250e0096e80d3/16:9/w_2560%2Cc_limit/next%2520presidential%2520debate%2520donald%2520trump%2520joe%2520biden%2520how%2520to%2520watch%2520teen%2520vogue%2520social.jpg",
    type: Type.Politics,
  },
  {
    title: "The RMS Titanic and RMS Olympic Were Swapped",
    description:
      "Conspiracy theorists believe that White Star Line swapped the RMS Titanic and RMS Olympic for insurance purposes. Theorists believe they did this due to the original Titanic having a pre-standing reputation for being unsinkable and the original Olympic having notorious construction problems leading to significantly higher costs. They believe that by swapping the two ships they could have the Olympic take the name of the Titanic and sink while on it's maiden voyage, thus allowing White Star Lines to cash in on the insurance from the loss of the ship. People support their belief in this theory with supposed photographs depicting the Olympic name across several pieces of the Titanic wreckage. There is no concrete evidence to support any part of this theory and the sinking of the Titanic is still a great tragedy to this day.",
    image_url:
      "https://qph.cf2.quoracdn.net/main-qimg-e6ee67b837dbbad502bd057c5e381cc6",
    type: Type.CoverUps,
  },
];

module.exports = {
  usersArray,
  theoryArray,
};
