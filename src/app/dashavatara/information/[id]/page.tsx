"use client"; // Ensure this component can utilize hooks
import React, { useEffect, useState } from 'react';
import Appheader from '@/components/Appheader';
import Display from '@/components/dashavatara';



interface DashavataraData {
    name: string;
    description: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;

  }
  

const Dashavatara = ({ params }: { params: Promise<{ id: string }> }) => {
  const [dashavatara, setDashavatara] = useState<DashavataraData | null>(null);
  const [imageSrc, setImageSrc] = useState<string>('');
  
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);

  useEffect(() => {
    const id = parseInt(unwrappedParams.id); // Convert id to a number

    console.log('ID from params:', unwrappedParams.id);
    console.log('Parsed ID:', id);

    const images = [
      '/dasha/1.jpg',
      '/dasha/2.jpg',
      '/dasha/3.jpg',
      '/dasha/4.jpg',
      '/dasha/5.jpg',
      '/dasha/6.jpg',
      '/dasha/7.jpg',
      '/dasha/8.jpg',
      '/dasha/9.jpg',
      '/dasha/10.jpg',
    ];
    const dashavataraData: DashavataraData[] = [
      {
        name: 'Matsya', 
        description: "Matsya is the first avatar of the Hindu god Vishnu, depicted as a giant fish who plays a key role in the preservation of life and sacred knowledge during a cosmic deluge. This avatar symbolizes divine protection, guidance, and the preservation of knowledge during a time of great crisis, as described in the Bhagavata Purana, Matsya Purana, and Mahabharata.",
        
        paragraph1: "The story of Matsya begins with King Satyavrata, a devoted ruler who finds a small fish while performing his daily ablutions in a river. The fish speaks and requests protection, which Satyavrata grants. As the fish grows larger, it reveals itself as Lord Vishnu and warns the king of an impending flood that will wipe out all life on Earth.",
        
        paragraph2: "Vishnu, in the form of Matsya, instructs Satyavrata to build a boat to save himself, the seven sages (saptarishis), seeds of all plants, and samples of every species of life. When the flood arrives, Matsya, now in the form of a massive fish with a single horn, pulls the boat through the turbulent waters, guiding it safely to higher ground.",
        
        paragraph3: "During the journey, Vishnu imparts sacred knowledge to Satyavrata and the sages, including the Vedas, which had been stolen by the demon Hayagriva. Matsya recovers these divine scriptures, ensuring that the essence of wisdom and dharma is preserved for future generations.",
        
        paragraph4: "The Matsya Avatar symbolizes divine protection during times of chaos, with the fish representing life, sustenance, and Vishnu’s ability to adapt to any situation. The intervention of Matsya emphasizes the importance of preserving spiritual knowledge and dharma in maintaining balance and order in the world.",
        
        paragraph5: "The story of Matsya teaches valuable spiritual lessons, including the power of faith, humility, and the divine’s protection in times of crisis. Matsya’s form as a humble fish serves as a reminder that even in the face of overwhelming disaster, the divine will always intervene to restore balance, protect life, and preserve knowledge."
      },
      {
        name: 'Kurma', 
        description: "Kurma is the second avatar of the Hindu god Vishnu, depicted as a giant tortoise who supports Mount Mandara during the churning of the ocean. This avatar plays a crucial role in restoring balance between the Devas (gods) and Asuras (demons), leading to the discovery of the nectar of immortality, Amrita.",
        
        paragraph1: "The story of Kurma begins when the Devas and Asuras, at odds with one another, cooperate to churn the ocean of milk in order to obtain the Amrita. To churn the ocean, they need a churning rod and a rope, but the mountain they choose to use begins to sink into the ocean due to its immense weight.",
        
        paragraph2: "At this moment, Vishnu incarnates as Kurma, the giant tortoise, and dives into the ocean to support Mount Mandara on his back. This stabilizes the mountain and allows the churning process to continue. As the churning progresses, numerous treasures and divine beings emerge from the ocean, including the goddess Lakshmi, the celestial elephant Airavata, and the deadly poison Halahala.",
        
        paragraph3: "The Asuras attempt to seize the Amrita, but Vishnu, assuming the form of Mohini, a beautiful enchantress, tricks them and ensures that the nectar is distributed to the Devas. This restores their strength and enables them to defeat the Asuras, bringing balance back to the universe.",
        
        paragraph4: "The Kurma Avatar symbolizes stability, support, and perseverance. Just as the tortoise provides a solid foundation for Mount Mandara, Vishnu’s support emphasizes the importance of remaining grounded and patient during difficult times. The avatar also teaches the value of cooperation, as the Devas and Asuras must work together to achieve a common goal.",
        
        paragraph5: "The spiritual lessons of the Kurma Avatar emphasize the importance of inner stability, perseverance, and divine support in overcoming challenges. It reminds us that the divine is always present, ready to take any form necessary to restore balance and guide us toward righteousness and harmony."
      },
      
      
      {
        name: 'Varaha', 
        description: "Varaha is the third avatar of Vishnu, depicted as a boar, who rescues the Earth (personified as the goddess Bhudevi) from the demon Hiranyaksha, who had submerged it in the cosmic ocean. This avatar represents the restoration of order and the protection of the Earth.",
        
        paragraph1: "The story begins when the demon Hiranyaksha drags the Earth to the bottom of the cosmic ocean. The Earth, personified as the goddess Bhudevi, is helpless in the face of this threat. The gods are unable to rescue her, and the situation grows dire.",
        
        paragraph2: "Vishnu incarnates as Varaha, a gigantic boar, and dives into the ocean. With immense strength, Varaha lifts the Earth on his tusks, emerging from the ocean to restore the Earth to its rightful place in the cosmos.",
        
        paragraph3: "During the battle with Hiranyaksha, Varaha defeats the demon, restoring the Earth to its proper position. The victory of Varaha symbolizes the triumph of good over evil and the protection of the Earth, which sustains all life.",
        
        paragraph4: "The Varaha Avatar emphasizes the importance of protecting and preserving the Earth, highlighting Vishnu's role as the protector of life. It teaches us that, like the Earth, we must also protect and nurture the resources and environment that sustain life.",
        
        paragraph5: "The story of Varaha teaches us about the value of courage, strength, and the divine protection that ensures the preservation of the world. It reminds us that the divine is always present to restore order when the forces of chaos threaten to overwhelm the balance of nature."
      },
      
      {
        name: 'Narasimha', 
        description: "Narasimha is the fourth avatar of Vishnu, depicted as a man-lion hybrid, who destroys the demon king Hiranyakashipu to protect his devotee Prahlada and restore balance in the universe.",
        
        paragraph1: "The story begins with Hiranyakashipu, a powerful demon king, who, granted a boon by Brahma, cannot be killed by man or beast, inside or outside, by day or night. With this boon, he terrorizes the world and forces everyone, including his son Prahlada, to worship him instead of Vishnu.",
        
        paragraph2: "Prahlada, a devoted follower of Vishnu, refuses to worship his father. Angered, Hiranyakashipu tries to kill his son multiple times, but Prahlada is protected by Vishnu. In his rage, Hiranyakashipu challenges the presence of Vishnu, asking whether Vishnu is present in a pillar in his palace.",
        
        paragraph3: "In response, Vishnu incarnates as Narasimha, a man-lion form, and bursts from the pillar. With the demon king in front of him at dusk, Vishnu, in the form of Narasimha, kills Hiranyakashipu in a manner that fulfills the boon’s conditions — neither man nor beast, inside nor outside, and at twilight.",
        
        paragraph4: "The Narasimha Avatar symbolizes the divine's ability to overcome all obstacles and restore justice. It emphasizes the importance of protection for the devotees of the divine, even in the most dangerous and seemingly impossible situations.",
        
        paragraph5: "The story of Narasimha teaches the value of unwavering devotion to the divine and how the divine will always protect those who are devoted, even when faced with overwhelming evil. It reminds us that divine intervention can come in forms that are beyond human understanding, and that righteousness will always prevail."
      },


      {
        name: 'Vamana', 
        description: "Vamana is the fifth incarnation (avatar) of the Hindu god Vishnu, depicted as a dwarf Brahmin who humbled the demon king Bali. This avatar is particularly significant in Hindu mythology, as it is the means by which Vishnu restores cosmic order by overcoming the powerful demon ruler, Mahabali, who had gained dominion over the three worlds.",
        
        paragraph1: "Once, the demon king Bali, a descendant of the demon Prahlada, performed a grand yajna (sacrifice) that earned him immense power. Bali’s devotion to Lord Vishnu made him an even stronger ruler, and he conquered the heavens, earth, and the netherworlds. His rule was benevolent towards his people, but his rise to supremacy disturbed the gods in the heavens.",
        
        paragraph2: "In response to their plea, Vishnu incarnated as Vamana, a dwarf Brahmin, to restore balance. Vamana, though small in stature, was a divine being with great wisdom and strength. He appeared at the grand yajna of Bali, where the demon king was offering sacrifices.",
        
        paragraph3: "Vamana, with a calm and humble demeanor, asked for a modest gift: the amount of land he could cover in three paces. Bali, prideful of his power and belief in his own generosity, agreed without hesitation. Vamana then grew to enormous size, and with each step, he covered the heavens, earth, and the underworld.",
        
        paragraph4: "At the third step, Vamana asked Bali where he could place his final step. Realizing the divine nature of the Brahmin, Bali offered his head as the place for Vamana’s third step. Vamana, in his full divine form, placed his foot on Bali’s head, sending him to the netherworld while restoring cosmic order.",
        
        paragraph5: "The Vamana Avatar illustrates that humility and divine wisdom can overcome pride and arrogance. It shows that even a small and humble form can carry immense power, and that devotion and sacrifice are the keys to true greatness."
      },
      {
        name: 'Parashurama',
        description: "Parashurama is the sixth avatar of Vishnu, depicted as a Brahmin warrior with an axe. He is known for his mission to rid the world of corrupt and tyrannical rulers, symbolizing the victory of justice and righteousness over evil.",
        
        paragraph1: "Parashurama's story begins with his father, the sage Jamadagni, and his mother Renuka. Parashurama is born with immense strength and divine attributes. After a series of tragic events, including the killing of his father by the king Kartavirya Arjuna, Parashurama takes up the axe to avenge his father's death.",
        
        paragraph2: "Parashurama, with his axe, goes on a campaign to rid the world of corrupt kings and tyrants. He fights and destroys the Kshatriya kings, leading to a world where the evil rulers are wiped out and justice is restored. His axe is both a symbol of power and a tool for righteous action.",
        
        paragraph3: "Though known for his rage and vengeance, Parashurama also embodies the values of discipline and righteousness. His role in the myth emphasizes that even a Brahmin, who typically renounces worldly matters, must act when dharma is threatened by evil rulers.",
        
        paragraph4: "The Parashurama Avatar emphasizes that divine intervention is sometimes necessary to restore balance in the world. It teaches the importance of fighting for justice and standing against corruption, no matter the cost.",
        
        paragraph5: "Parashurama’s journey is a reminder that divine power can manifest in different forms — even in a warrior's might. His story teaches us about the balance between peace and action, and the need for determination when confronting evil."
      }
      ,
      {
        name: 'Krishna', 
        description: "Krishna is the eighth and most popular incarnation of Vishnu, depicted as a charming, playful, and divine cowherd. He is known for his childhood exploits, divine miracles, his teachings in the Bhagavad Gita, and his role in the Mahabharata. Krishna is revered as a god of love, wisdom, and compassion, and his life is full of divine stories that illustrate the nature of divine love and dharma.",
        
        paragraph1: "Krishna’s early life was marked by miraculous events, such as his birth in a prison cell, his survival of numerous assassination attempts by his uncle Kamsa, and his divine acts in his childhood, like lifting the Govardhan Hill to protect the villagers from a storm. Krishna is also known for playing the flute, which symbolizes the call of the divine to the human soul.",
        
        paragraph2: "As a youth, Krishna became a leader and protector of the Yadava clan. His teachings, especially in the Bhagavad Gita, guide Arjuna, his disciple, through a moral crisis on the battlefield of Kurukshetra. Krishna's teachings focus on the concepts of selfless action (Karma Yoga), devotion (Bhakti Yoga), and knowledge (Jnana Yoga), illustrating the path to spiritual liberation.",
        
        paragraph3: "Krishna is also associated with the concept of divine love, particularly through his relationship with Radha and the gopis (milkmaids). These stories emphasize the deep, selfless love and devotion that the soul must have for the divine, reflecting the ideal of Bhakti, or devotional worship.",
        
        paragraph4: "Krishna’s role as a charioteer in the Mahabharata’s Kurukshetra War showcases his wisdom and strategic mind, but it is also a story of dharma and righteousness, where Krishna helps Arjuna make crucial decisions that preserve the balance between good and evil.",
        
        paragraph5: "The Krishna Avatar emphasizes the importance of righteousness, devotion, and the power of love and compassion. His life teaches us about the essence of dharma, the significance of following the divine path, and the importance of acting selflessly in service to humanity and the divine."
      },
      {
        name: 'Buddha', 
        description: "Buddha is the ninth avatar of Vishnu, depicted as Siddhartha Gautama, who attained enlightenment and became the founder of Buddhism. This avatar represents the embodiment of knowledge, peace, and the path to liberation. Buddha’s teachings on overcoming suffering (dukkha), achieving inner peace, and the Middle Path are central to his mission in the world.",
        
        paragraph1: "Siddhartha Gautama, born into a royal family, was shielded from the harsh realities of life. However, upon encountering sickness, old age, and death for the first time, he was struck by the impermanence and suffering inherent in human existence. Deeply disturbed, he left his palace to seek a solution to suffering.",
        
        paragraph2: "Through years of meditation and ascetic practices, Siddhartha achieved enlightenment under the Bodhi tree, realizing the Four Noble Truths and the Eightfold Path as a means to overcome suffering. He became the Buddha, the Enlightened One, and dedicated his life to spreading his teachings of peace, mindfulness, and compassion.",
        
        paragraph3: "Buddha’s teachings emphasize that suffering is a natural part of life, but it can be overcome through the right understanding, right intention, right speech, right action, and right meditation. His path leads to Nirvana, the cessation of suffering, which is the ultimate spiritual goal.",
        
        paragraph4: "As an avatar of Vishnu, Buddha represents the transformative power of knowledge, compassion, and mindfulness. His teachings encourage individuals to find their inner peace through self-awareness and to practice non-attachment, self-discipline, and kindness toward all beings.",
        
        paragraph5: "The Buddha Avatar teaches the importance of inner peace and spiritual growth. It emphasizes that true liberation comes from wisdom, compassion, and a deep understanding of the nature of reality. Buddha’s life and teachings continue to inspire millions around the world to pursue a path of peace and enlightenment."
      }
      ,
      
      {
        name: 'Kalki', 
        description: "Kalki is the future and tenth avatar of Vishnu, depicted as a warrior on a white horse who will appear at the end of the current age, Kali Yuga, to restore righteousness (dharma) and destroy evil. Kalki's arrival is prophesied in various texts, and he is seen as a harbinger of a new cycle of time, marking the beginning of Satya Yuga, a new age of truth and virtue.",
        
        paragraph1: "The prophecy of Kalki’s arrival appears in the Puranas, particularly the Vishnu Purana, which describes how the world will degenerate into chaos and moral decay at the end of Kali Yuga. At this time, the planet will be overrun by corruption, evil rulers, and widespread immorality.",
        
        paragraph2: "Kalki will emerge as a mighty warrior, riding a white horse, wielding a sword to destroy the forces of evil and establish dharma. His appearance will restore cosmic order, purging the world of the corrupt and beginning the transition into a new age of righteousness, Satya Yuga.",
        
        paragraph3: "Kalki’s arrival symbolizes the end of the current cycle of time (Kalpa) and the promise of a fresh start, where truth, justice, and virtue will prevail. His mission is to cleanse the world of all malevolent forces and to bring about the rebirth of dharma, re-establishing the divine order in the universe.",
        
        paragraph4: "The Kalki Avatar teaches that, though times may seem dark and hopeless, divine intervention will always occur to restore balance. His future incarnation represents the timeless nature of Vishnu’s protection and his commitment to preserving the cosmic order, no matter the era.",
        
        paragraph5: "Kalki’s arrival is a reminder that the forces of good will ultimately triumph over evil. His avatar points to the cyclical nature of time in Hindu cosmology and reinforces the belief that every age of corruption is followed by a renewal, bringing with it a return to truth, purity, and harmony in the universe."
      },
      
    ];
    // Validate id and set data accordingly
    if (!isNaN(id) && id >= 0 && id < dashavataraData.length) {
      setDashavatara(dashavataraData[id]);
      setImageSrc(images[id]);
    } else {
      console.error('Invalid index for dashavatara data', id);
    }
  }, [unwrappedParams.id]); // Watch for changes to unwrappedParams.id

  if (!dashavatara) return <div>Loading...</div>;

  return (
    <div>
      <Appheader />
      <br />
      <Display dashavatara={dashavatara} imageSrc={imageSrc} />
    </div>
  );
};

export default Dashavatara;
