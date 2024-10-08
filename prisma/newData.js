const { Type } = require("@prisma/client");
const { type } = require("express/lib/response");

const newTheoryArray = [
  {
    title:
      "Hurricanes Helene & Milton Were Created By The Biden Administration",
    description:
      "The 2024 Presidential Election has caused many extremist American citizens to create wild consirpacy theories to discredit the opposition of their preferred political party. One of the most outlandish theories to come out of the increasing tensions is one created by extremist Conservative Americans. Their theory states that current President Joe Biden and Vice President Kamala Harris are utilizing weather manipulation technology to create the recent Hurricanes that have decimated the Southern States and Appalachia Region. Their reasoning behind spreading such dangerous, and laughably unrealistic, misinformation is nothing more than a lack of critical thinking skills and common sense. There is zero conclusive proof that Hurricanes Helene and Milton are man-made. There is; however, scientific proof that they are the product of Humanity's increased impact to the Earths climate.",
    image_url:
      "https://ichef.bbci.co.uk/ace/standard/1920/cpsprodpb/2384/live/a65ba440-84b7-11ef-ad45-893aa022fcbc.jpg",
    type: Type.Weather,
  },
  {
    title: "Illegal Venezuelan Immigrants Are Eating Pets In Ohio",
    description:
      "Former President Donald Trump has been the author of countless conspiracy theories that have driven many Americans into extremists beliefs since 2016. He went public with one of his most recent conspiracy theories during the first, and only, Presidential Debate with Kamala Harris on September 4th, 2024. The former president stated the following: 'In Springfield [Ohio] they're eating the dogs. The people that came in they're eating the cats. They're eating... they're eating the pets of the people that live there. And this is what's happening in our country and it's a shame'. Even though this wild conspiracy was immediately disproved by ABC Moderators, a number of Trump's supporters caused chaos in Springfield Ohio to the point that city officials had to shut down schools and take numerous other measures to ensure the safety of it's citizens. Trump's Vice President Candidate, J.D. Vance, made a public statement following these events admitting that he made up the story himself in an effort to make the American people pay attention. This conspiracy theory alone is one of the best examples of the dangers of misinformation and the importance of researching what you read and listen to before acting violently.",
    image_url:
      "https://image.cnbcfm.com/api/v1/image/108032254-1726019757298-gettyimages-2171253767-wm_10353_vshjs8do.jpeg?v=1726788059&w=1858&h=1045&vtcrop=y",
    type: Type.Society,
  },
  {
    title: "The COVID-19 Vaccine Contains A 5G Microchip",
    description:
      "The Coronavirus has been the center of a myriad of crazy conspiracy theories and misinformation. One theory states that the COVID-19 vaccine contained a 5G microchip that would: A.) track citizens, B.) detonate and kill citizens as a method of population control, C.) cause cancer thus bringing in more profit to Big Pharma, and many others. Conspiracy Theorists cannot seem to agree on what exactly this 5G chip actually did which only made it harder for the general public to tuly buy into it. Eventually theorists started to circulate an image of the supposed 5G chip's diagram, but it was quickly debunked and revealed to be from a standard guitar pedal. There is no proof that there ever was a chip inside of the COVID-19 vaccine.",
    image_url:
      "https://www.msms.org/Portals/0/EasyDNNnews/1687/shutterstock_1716494026.jpg",
    type: Type.Medicine,
  },
  {
    title: "CERN Ended The World In 2012",
    description:
      "This conspiracy theory states that when CERN (the European Organization for Nuclear Research) discovered the Higgs-Boson (also known as the God Particle) it created a Black Hole that swallowed the Earth. Theorists believe that while this happened over 10 years ago we just haven't noticed it yet. CERN is the topic of many outlandish conspiracy theories, but it is incredibly important to understand that it is not the site of any secret rituals and it certainly does not produce nearly enough energy to create a Black Hole.",
    image_url:
      "https://www.universetoday.com/wp-content/uploads/2018/12/nwOtx-2000x1200.jpg",
    type: Type.Science,
  },
  {
    title: "The Denver International Airport Is The Illuminati Headquarters",
    description:
      "Conspiracy Theorists have suggested that the Denver International Airport (DIA) is the headquarters for the Illuminati, a supposed group of global elites that control the world. Theorists support their beliefs with the existence of numerous strange imagery found inside the airport including, but not limited to: walls depicting Nazi imagery and a capstone plaque that mentions the New World Airport Organization (which does not exist), gargoyles in Jeppesen terminal, and an interactive gargoyle that welcomes travelers to the Illuminati Headquarters before correcting itself to Denver International Airport. While all of this may be a strange choice of decor for an International Airport, the D.I.A most likely piggy-backed off the popular conspiracy theories and had their marketing team take advantage to increase tourism. The chance of the D.I.A being the secret headquarters of a Global Cabal is slim to none at best.",
    image_url:
      "https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2016/05/160519-DIA-KEVINJBEATY-32.jpg",
    type: Type.Society,
  },
  {
    title: "Prince Charles Is A Vampire",
    description:
      "Some Conspiracy Theorists believe that Prince Charles of Wales in in fact a vampire. Yes, the bite your neck and drain your blood kind of vampire. Theorists believe this for two reasons: 1) Prince Charles is related to Vlad the Impaler who was the inspiration behind Dracula, and 2) Prince Charles avoids sunlight. Now while both of these are indeed true it does not mean that Prince Charles is a vampire. Charles is the great-grandson of Vlad the Impaler 16 times removed through George the Fifth and Queen Mary. Charles also has a hereditary disease known as porphyria which is an iron deficiency that causes individuals to be sensitive to sunlight. There is zero evidence to even suggest that Prince Charles is lurking in the night feasting on the unsuspecting citizens of Wales.",
    image_url:
      "https://metro.co.uk/wp-content/uploads/2024/04/SEC_202008498-7bf5.jpg?quality=90&strip=all",
    type: Type.CoverUps,
  },
  {
    title: "Chemicals In The Water Are Turning Frogs Gay",
    description:
      "Alex Jones is a right-wing extremist that went viral in the mid-2010s for his fiery and senseless rants about Deep State America and the plots against the American People. Alex Jones was largely responsible for the start of the rise in extremism among American Citizens as he spreaded misinformation about both political parties when he first started getting the attention of the public, mainly from his YouTube channel Info Wars. Alex Jones has begun centering his content around demonizing the Democratic Party in recent years, but he is still most famous for his Gay Frogs rant. During this rant he went on to make claims that American Elites and Government Officials were introducing chemicals into the water that were turning the frogs gay and severly reducing frog populations. This video of his went viral and spurred on countless musical edits, one of which gained 22 million views. There was never any evidence to suggest that frogs were 'turning gay' or that there were any chemicals that could even accomplish such a thing.",
    image_url: "https://pbs.twimg.com/media/GJts38SW8AAbniQ.jpg",
    type: Type.Science,
  },
  {
    title: "Author J.K. Rowling Doesn't Exist",
    description:
      "In 2005 a Norwegian filmmaker, Nina Grunfeld, argued that the hit novel series, Harry Potter, was created by an industry of writers and that its author J.K. Rowling was only a front for its production. Grunfeld supported her conspiracy theory asking 'Is it possible that a person can write six thick books that are translated into 55 languages and sell more than 250 million copies in less than 10 years?' The simple answer is yes. Thanks to modern technology and the innovations of the industrial and technological ages, human beings have access to resources that allow us to achieve things once thought impossible. It is unclear whether or not Conspiracy Theorists actually believe Nina's wild claim, but it's clear that this conspiracy theory has no evidence supporting it and is merely a result of jealousy.",
    image_url:
      "https://images.thedirect.com/media/article_full/jk-rowling-harry-potter-movies.jpg",
    type: Type.Society,
  },
  {
    title: "The Ice Bucket Challenge Was Really A Satanic Ritual",
    description:
      "In 2014 a challenge emerged online where people would dump buckets of ice water over themselves, friends or family in an effort to promote awareness of ALS (also known as Lou Gehrig's Disease) and encourage donations to research. With all new viral trends online there are conspiracy theories that come with it and critics of the Ice Bucket Challenge flocked to YouTube to attempt to reveal the true purpose of the challenge. They went as far as claiming that the ALS Association started the trend to perform a mass ritual purification cleansing for what would supposedly be the largest human sacrifice in human history, which was part of a hidden Illuminati code passed down by Satan himself. This is yet another example of the importance of critical thinking skills because there is zero evidence that would ever support such a wild and senseless claim.",
    image_url:
      "https://www.boucherco.com/wp-content/uploads/2014/09/icebucketchallenge.jpg",
    type: Type.CoverUps,
  },
  {
    title: "Crisis Actors",
    description:
      "Crisis Actors are usually individuals who portray disaster victims during first responder training exercises. Conspiracy Theorists claim that the United States Government stages mass shootings and other traumatic events then utilizes these actors as covert operatives to induce panic in the American people. Some of the allegedly staged events include Sandy Hook and the Boston Marathon Bombing. Theorists believe that the U.S. Government stages such events to justify goals like disarming citizens, increasing surveillence of citizens, or even military action against a foreign nation. Influential advocates of this theory include Alex Jones, James Tracy, outlets such as True Pundit, and others. There is no conclusive proof that the American Governemnt is staging traumatic events and even suggesting such things is not only disrespecting the victims, but also their friends and families.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Security_forces_respond_in_active_shooter_exercise_140204-F-OC707-015.jpg",
    type: Type.Society,
  },
];

module.exports = {
  newTheoryArray,
};
