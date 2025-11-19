'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { Shield, AlertTriangle, Users, Gavel, Eye, Lock } from 'lucide-react';
import Link from 'next/link';

interface Rule {
  id: number;
  category: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'ban';
  punishment: string;
}

export default function RulesPage() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check authentication
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/rules');
        const data = await response.json();
        setRules(data);
      } catch (error) {
        console.error('Failed to fetch rules:', error);
        // Fallback demo data
        setRules([
          {
            id: 1,
            category: 'general',
            title: 'Respect All Souls',
            description: 'Treat every player with respect, no matter their character, background, or playstyle. No harassment, discrimination, slurs, bullying or toxic behaviour – in or out of character.',
            severity: 'high',
            punishment: '24h ban – Permanent ban'
          },
          {
            id: 2,
            category: 'general',
            title: 'No Metagaming',
            description: 'The County only knows what it sees in roleplay. Do not use Discord, streams, DMs or any out-of-character information as knowledge your character magically “just knows”.',
            severity: 'medium',
            punishment: 'Warning – 12h ban'
          },
          {
            id: 3,
            category: 'roleplay',
            title: 'Stay In The Story',
            description: 'Remain in character while you’re in the County. Use /ooc only when needed and keep it brief. If you must break immersion, do it with respect for the scene and the people in it.',
            severity: 'low',
            punishment: 'Warning – Kick'
          },
          {
            id: 4,
            category: 'roleplay',
            title: 'Grounded Characters',
            description: 'Your character is a person, not a superhero. Give them flaws, fears and limits. No cartoon invincibility, lore-breaking powers or behaviour that shatters the tone of Diablo County.',
            severity: 'medium',
            punishment: 'Character reset – 24h ban'
          },
          {
            id: 5,
            category: 'combat',
            title: 'No Random Deathmatch (RDM)',
            description: 'Every bullet should have a story. You must have a clear, roleplay-driven reason for violence. Shooting, stabbing or blowing up players “just because” is not allowed.',
            severity: 'high',
            punishment: '24h ban – 7 day ban'
          },
          {
            id: 6,
            category: 'combat',
            title: 'Fear The Reaper',
            description: 'Your character wants to live. When outnumbered, outgunned or cornered, you’re expected to show fear, back down or surrender instead of forcing a win-at-all-costs shootout.',
            severity: 'medium',
            punishment: 'Warning – 12h ban'
          },
          {
            id: 7,
            category: 'economy',
            title: 'No Exploiting',
            description: 'Do not abuse bugs, scripts, economy loops or systems for advantage. If you find an exploit, report it to staff – don’t build an empire on it.',
            severity: 'ban',
            punishment: 'Permanent ban'
          },
          {
            id: 8,
            category: 'economy',
            title: 'Respect The Economy',
            description: 'Treat money, items and businesses as valuable. No throwing stacks around with no RP reason, and no “lottery-winning” handouts that break progression for yourself or others.',
            severity: 'medium',
            punishment: 'Money reset – 24h ban'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRules();
  }, []);

  const categories = [
    { key: 'general', label: 'General', icon: Shield },
    { key: 'roleplay', label: 'CHARACTER CREATION & WORLD GUIDELINES', icon: Users },
    { key: 'combat', label: 'Combat & PvP', icon: Gavel },
    { key: 'economy', label: 'Economy', icon: Eye }
  ];

  const filteredRules = rules.filter(rule => rule.category === selectedCategory);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-400 border-green-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'high': return 'text-orange-400 border-orange-400';
      case 'ban': return 'text-red-400 border-red-400';
      default: return 'text-white border-white';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return <Eye size={16} />;
      case 'medium': return <AlertTriangle size={16} />;
      case 'high': return <Shield size={16} />;
      case 'ban': return <Lock size={16} />;
      default: return <Eye size={16} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{backgroundColor: 'rgb(32, 32, 32)'}}>
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(32, 32, 32)'}}>
      <Navigation />
      
      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Manage Rules Button for Super Admins */}
            {isAuthenticated && user?.role === 'SUPER_ADMIN' && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-end mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/admin/rules'}
                  className="group relative px-6 py-3 overflow-hidden transition-all duration-300"
                  style={{
                    width: '200px',
                    height: '50px'
                  }}
                >
                  <div className="absolute inset-0"
                       style={{
                         backgroundImage: 'url("/assets/ButtonBg.png")',
                         backgroundSize: '100% 100%',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'
                       }} />
                  <div className="absolute inset-0 bg-black group-hover:bg-white transition-colors duration-300"
                       style={{
                         maskImage: 'url("/assets/ButtonBg.png")',
                         maskSize: '100% 100%',
                         maskPosition: 'center',
                         maskRepeat: 'no-repeat'
                       }} />
                  {/* Content */}
                  <span className="relative z-10 text-white group-hover:text-black font-bold transition-colors duration-300"
                        style={{fontFamily: 'Cinzel, serif'}}>
                    MANAGE RULES
                  </span>
                </motion.button>
              </motion.div>
            )}

            <h1 className="text-5xl lg:text-7xl font-bold text-white font-serif mb-4" style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              fontFamily: 'Cinzel, serif'
            }}>
              DIABLO COUNTY LAW
            </h1>
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/divider_line.png"
                alt="Divider"
                width={300}
                height={8}
                className="sepia contrast-150"
              />
            </div>
            <p className="text-white text-xl leading-relaxed font-medium p-4 max-w-3xl mx-auto"
               style={{
                 backgroundImage: 'url("/assets/background_paper.png")',
                 backgroundSize: '100% 100%',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 minHeight: '120px'
               }}>
              Diablo County runs on story, not chaos. These laws keep the frontier harsh but fair, the nights strange but not toxic, and make sure everyone gets a chance to tell their tale.
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 p-6 border-2 border-red-600"
            style={{
              backgroundImage: 'url("/assets/background_paper.png")',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '150px'
            }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="text-red-400" size={24} />
              <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Cinzel, serif'}}>
                IMPORTANT NOTICE
              </h2>
            </div>
            <p className="text-white font-medium leading-relaxed">
              Ignorance of the law won’t save you. By playing in Diablo County, you agree to follow these rules. 
              Punishments can range from warnings to permanent banishment from the County. Staff decisions are final 
              and are made to protect the health of the community and the stories within it.
            </p>
          </motion.div>

          {/* Rule Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-3 font-bold border-2 transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.key 
                      ? 'text-white border-red-600' 
                      : 'text-white border-transparent hover:border-red-600'
                  }`}
                  style={{
                    backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    fontFamily: 'Cinzel, serif'
                  }}
                >
                  <IconComponent size={18} />
                  <span>{category.label.toUpperCase()}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Rules List */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white font-serif mb-8 text-center" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              fontFamily: 'Cinzel, serif'
            }}>
              {categories.find(c => c.key === selectedCategory)?.label.toUpperCase()} RULES
            </h2>

            {/* Category-specific description for General Rules */}
            {selectedCategory === 'general' && (
              <div
                className="mb-10 p-6 text-white font-medium leading-relaxed"
                style={{
                  backgroundImage: 'url("/assets/background_paper.png")',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '200px'
                }}
              >
                <h3
                  className="text-3xl font-bold mb-4 text-center"
                  style={{ fontFamily: 'Cinzel, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >
                   
                </h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    General rules that may not fit into any broader category
                  </li>
                  <li>
                    Both players and their characters must be 18 years old or older. The server is set in the year 1903
                    which means that your character&apos;s birth year must be 1885 or earlier.
                  </li>
                  <li>
                    You are not permitted to sell or transfer anything in-game for real life money or trade out of game
                    items. This violates CFX&apos;s Platform License Agreement and you will be permanently banned.
                  </li>
                  <li>
                    You are not permitted to asset transfer items or money between your characters.
                  </li>
                  <li>
                    You are not permitted to mass transfer your items and money to your friends and gang members without
                    RP cause even if you intend to PK or die.
                  </li>
                  <li>
                    Any donation of money, scripts, assets, etc. to the server is final and non-refundable. Attempting to
                    circumvent this term via chargebacks or equivalent is prohibited. Refund requests will be
                    automatically denied. If you&apos;re banned from the Diablo Roleplay, you will not be eligible for a
                    refund at any time.
                  </li>
                  <li>
                    Donations made to support this server are appreciated, but please note that they do not guarantee the
                    implementation of specific scripts or features. All contributions go towards supporting the server&apos;s
                    broader goals and vision as determined by the server owners. We strongly discourage purchasing scripts
                    with the expectation that they will be added, as such decisions are made at our discretion based on
                    compatibility, quality and alignment with our direction.
                  </li>
                  <li>
                    When involved in a violent altercation with a player you may decide to down them or rob them - but you
                    may not do both in a single interaction.
                  </li>
                  <li>
                    Any interpretation or actioning of the rules is ultimately at the full discretion of the staff team.
                    If you feel you have been treated unfairly, please escalate your complaint to Server Management, or
                    via a ban appeal (if applicable).
                  </li>
                  <li>
                    Staff may, at their discretion, remove players who promote toxic and harmful behavior and you should
                    understand that playing on Diablo is a privilege that can be revoked should it be deemed necessary for
                    the community.
                  </li>
                  <li>
                    You are responsible for all actions taken by your account while on the server, regardless of who is in
                    control of it. Additionally, &apos;I was drunk&apos; or otherwise chemically impaired does not exempt you from
                    bans.
                  </li>
                  <li>
                    Avoidance of Punishment: Don&apos;t try to dodge your punishment. If you&apos;re temporarily blocked from our
                    services, creating new accounts or using other methods to get around this is not allowed. Breaking this
                    rule could lead to more severe punishment or make your current punishment permanent.
                  </li>
                  <li>
                    This server is not subject to your definition of &quot;fairness&quot;. It is recommended members have media
                    clipping applications such as Medal or Steelseries GG Moments installed and active. It is essential for
                    bug reports, compensation requests and reporting rule breaks. Discord accounts that are less then one
                    week old will be immediately rejected should they submit an application.
                  </li>
                </ul>
              </div>
            )}

            {/* Category-specific description for Character Creation & World Guidelines */}
            {selectedCategory === 'roleplay' && (
              <div
                className="mb-10 p-6 text-white font-medium leading-relaxed"
                style={{
                  backgroundImage: 'url("/assets/background_paper.png")',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '200px'
                }}
              >
                <h3
                  className="text-3xl font-bold mb-4 text-center"
                  style={{ fontFamily: 'Cinzel, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >
                  CHARACTER CREATION & WORLD GUIDELINES
                </h3>
                <p className="mb-4">
                  Every story in Diablo County starts with a character. These guidelines are here to ensure everyone
                  begins on equal footing with a grounded, immersive roleplay experience.
                </p>
                <h4 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                  General Expectations
                </h4>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Era Appropriate Names:</strong> Your character&apos;s name must reflect the 1903 setting.
                    Avoid modern names, abbreviations, or nicknames that feel out of place.
                  </li>
                  <li>
                    <strong>No Famous, Meme, or Pop Culture Names:</strong> You may not use names taken from
                    celebrities, fictional or historical characters, or references to memes or modern culture. This
                    includes obvious variations meant to bypass detection.
                  </li>
                  <li>
                    Your character cannot be related to or in reference to any existing characters in the Red Dead
                    Redemption universe.
                  </li>
                  <li>
                    <strong>No Self-Inserts:</strong> You may not use your real name or username (or close variations)
                    for your character. This helps preserve immersion and prevents overly self-referential or
                    out-of-character driven roleplay.
                  </li>
                  <li>
                    <strong>Do Not Play Your Own “Cousin,” “Sibling,” or “Friend”:</strong> Characters should be fully
                    distinct from each other. You may not link your characters via in-character family ties or
                    relationships (for example, claiming your new character is your last character&apos;s brother).
                  </li>
                  <li>
                    As per the above, this goes for even casual mentions, even if no narrative link is established.
                    Referring to alternate characters as your &quot;cousin&quot; is immersion breaking and is often used as a form
                    of metagaming.
                  </li>
                  <li>
                    <strong>Character Reuse from Previous Seasons Is Prohibited:</strong> If you played in Diablo
                    Season 1 or 2, you may not reuse the same character. Repeating characters will result in
                    administrative deletion without warning.
                  </li>
                  <li>
                    <strong>Clean Slate for All:</strong> Every player enters this new season on equal footing. No
                    character begins with established ownership of jobs, buildings, or territories. These must be earned
                    through roleplay. The only exemption to this rule is those who have been placed in government or
                    business positions by staff at the start of the season.
                  </li>
                  <li>
                    <strong>No Narrative Unfair Advantages:</strong> Characters may not be created with traits that
                    provide unrealistic or unfair advantages such as &quot;I don&apos;t feel pain&quot;, supernatural foresight, or
                    mystical endurance. If it&apos;s not a supported game mechanic, it doesn&apos;t exist.
                  </li>
                  <li>
                    <strong>World-Building Considerations:</strong> Although this is a fresh world, your character
                    doesn&apos;t have to be "new" to Diablo County. They may have grown up locally or be returning after
                    years away, but they should not come in with current claims, power, or standing.
                  </li>
                  <li>
                    <strong>Set in 1903:</strong> All characters, outfits, language, and backstories must be consistent
                    with a historical 1903 frontier setting. No references to modern technology, knowledge, or culture
                    are allowed.
                  </li>
                  <li>
                    <strong>Protected Groups & Modern Standards:</strong> We are aware of the prevalence of certain
                    discriminatory comments and attitudes in the early 1900s; however, since we as players are in the
                    modern day, these will not be a part of roleplay in this alternate-universe America. Excluding,
                    marginalizing, or otherwise treating someone unfairly because of their identity is strictly
                    prohibited. Women, people of colour, and other protected groups are given equal opportunity in Diablo
                    County.
                  </li>
                </ul>
              </div>
            )}
            
            {/* Category-specific description for Combat & PvP */}
            {selectedCategory === 'combat' && (
              <div
                className="mb-10 p-6 text-white font-medium leading-relaxed"
                style={{
                  backgroundImage: 'url("/assets/background_paper.png")',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '200px'
                }}
              >
                <h3
                  className="text-3xl font-bold mb-4 text-center"
                  style={{ fontFamily: 'Cinzel, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >
                  HOSTILE RP
                </h3>

                {/* Engagement Timing & Cooldowns */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Engagement Timing & Cooldowns
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    Hostile RP or acts that could escalate to hostile RP are not allowed within 30 minutes of a server
                    restart – before or after. If a roleplay scene is tense during this time, you are expected to
                    de-escalate.
                  </li>
                  <li>
                    After a hostile interaction, a <strong>1-hour cooldown</strong> must be observed before engaging the
                    same players or groups.
                  </li>
                  <li>
                    The initiating group must leave the area for the duration of the cooldown. This excludes sheriffs
                    who are actively responding to calls.
                  </li>
                  <li>
                    Using teleports (boats, hideouts, etc.) to avoid being captured within 60 minutes of initiating
                    hostilities or committing a crime is prohibited.
                  </li>
                </ul>

                {/* Initiation & Proper RP */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Initiation & Proper RP
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    You must provide clear in-character initiation before engaging in violence. Immediately attacking
                    someone without RP is considered <strong>RDM</strong>.
                  </li>
                  <li>
                    If you are hogtied, cuffed, or escorted, you may not break free or alert sheriffs unless left
                    entirely alone and unguarded.
                  </li>
                </ul>

                {/* Sniper Disclosures / Distance Shooters */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Sniper Disclosures / Distance Shooters
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    If you have a sniper or distanced shooter ready during a scene, you must disclose this to the other
                    party before initiating conflict.
                  </li>
                  <li>
                    Clearly communicate the player&apos;s presence and intent to shoot.
                  </li>
                  <li>
                    Failing to do so and taking a shot is considered <strong>RDM</strong>.
                  </li>
                </ul>

                {/* Mass & Group Limits */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Mass & Group Limits
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>Criminal groups are limited to <strong>6 people</strong> during hostile RP.</li>
                  <li>You can only ride with more than 6 if not engaging in criminal activity.</li>
                  <li>
                    &quot;Externals&quot; to a robbery or criminal activity are counted as part of your total number.
                  </li>
                  <li>
                    Hostile pets (such as wolves) are counted as part of your hostile numbers (for example,
                    <em>5 players + 1 tame wolf = 6, hostile RP cap</em>).
                  </li>
                  <li>Hidden hostile pets must be declared like an external.</li>
                  <li>
                    Sheriffs/law must adhere to limits based on scene type (see chart below).
                  </li>
                </ul>

                {/* Scene Specific Limits */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Scene Specific Limits
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>Store Robbery: <strong>4 criminals / 5 law</strong></li>
                  <li>Bank Robbery: <strong>6 criminals / 7 law</strong></li>
                  <li>Raids: <strong>6 criminals / 7 law</strong></li>
                  <li>
                    General altercations outside of robbery systems do not have law limits and any law in the area may
                    respond. Exercise caution when deciding to undertake risky situations (such as attempting to break
                    friends out of custody at a sheriff&apos;s office).
                  </li>
                  <li>
                    If you decide to go with dramatically less than your cap when doing a heist, you may put yourself at
                    a severe disadvantage. Any risk taken is your personal responsibility and repercussions do not scale
                    based on how many you bring with you.
                  </li>
                </ul>

                {/* Hostage Rules */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Hostage Rules
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>Locals are not valid hostages.</li>
                  <li>
                    You may not take people hostage who are actively in and out of menus such as work benches and
                    clothing stores. However, using these menus as a way to bypass being taken hostage intentionally is
                    also prohibited.
                  </li>
                  <li>Your friends, associates, and allies are not valid hostages.</li>
                  <li>
                    You may not hold someone hostage for more than 30 minutes before starting the robbery or scene.
                  </li>
                  <li>
                    Do not rob or take hostage players who are just spawning in. Allow them time to load in, gear up,
                    and settle before initiating.
                  </li>
                </ul>

                {/* Combat Rules & Considerations */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Combat Rules & Considerations
                </h4>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>Being AFK does not protect you from in-game events.</li>
                  <li>
                    <strong>Line of Sight Rule:</strong> If you or your victim/aggressor leaves line of sight for 10
                    minutes, the scene is considered over.
                  </li>
                </ul>

                {/* Examples of Invalid Hostile RP */}
                <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  Examples of Invalid Hostile RP
                </h4>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Attacking another player with no RP or reason.</li>
                  <li>Resorting to violence immediately instead of roleplay.</li>
                  <li>Killing or injuring someone without valid RP justification.</li>
                  <li>Using a sniper without disclosing their presence.</li>
                  <li>Starting combat before a player has fully loaded in.</li>
                </ul>
              </div>
            )}
            
            <div className="space-y-6">
              {filteredRules.map((rule, index) => (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ x: 5 }}
                  className="p-6 transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundImage: 'url("/assets/background_paper.png")',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl font-bold text-white" style={{fontFamily: 'Cinzel, serif'}}>
                        #{rule.id}
                      </div>
                      <h3 className="text-xl font-bold text-white" style={{fontFamily: 'Cinzel, serif'}}>
                        {rule.title.toUpperCase()}
                      </h3>
                    </div>
                    
                    <div className={`flex items-center space-x-2 px-3 py-1 border-2 ${getSeverityColor(rule.severity)}`}>
                      {getSeverityIcon(rule.severity)}
                      <span className="text-sm font-bold">{rule.severity.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  <p className="text-white font-medium leading-relaxed mb-4">
                    {rule.description}
                  </p>
                  
                  <div className="border-t-2 border-white pt-4">
                    <div className="flex items-center space-x-2">
                      <Gavel className="text-red-400" size={16} />
                      <span className="text-white font-bold text-sm">PUNISHMENT:</span>
                      <span className="text-white font-medium text-sm">{rule.punishment}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Staff */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center p-8"
            style={{
              backgroundImage: 'url("/assets/background_paper.png")',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '200px'
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily: 'Cinzel, serif'}}>
              QUESTIONS ABOUT FRONTIER LAW?
            </h2>
            <p className="text-white font-medium leading-relaxed mb-6">
              Not sure how a rule applies to your story, gang or character idea? Reach out before you roll the dice. 
              Our staff team can help you keep your concept within Diablo County lore while still feeling unique and powerful.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-bold py-4 px-8 border-2 border-transparent hover:border-red-600 transition-all duration-300"
              style={{
                backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                fontFamily: 'Cinzel, serif'
              }}
            >
              CONTACT STAFF
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
