/**
 * StyleSense — Master Style & Color Recommendation Data
 * 
 * Local, rule-based recommendation dataset.
 * Covers 7 skin tones across 3 undertones (21 harmonic combinations),
 * Indian ethnic & contemporary wear, jewelry, footwear, hair styles, and palettes.
 * 
 * All recommendations are grounded in color harmony, personal comfort,
 * and body-positive styling expression.
 */

export const STYLE_DATA = {
  // Skin tone definitions with display swatches
  skinTones: [
    {
      id: 'fair',
      name: 'Fair',
      hex: '#FBE3D5',
      description: 'Porcelain to ivory complexion with luminous delicacy.'
    },
    {
      id: 'light',
      name: 'Light',
      hex: '#F0C4A8',
      description: 'Soft peachy to beige complexion with gentle warmth or coolness.'
    },
    {
      id: 'medium',
      name: 'Medium',
      hex: '#DDA57C',
      description: 'Classic wheatish to honey-toned complexion.'
    },
    {
      id: 'olive',
      name: 'Olive',
      hex: '#BFA175',
      description: 'Golden-greenish or warm toasted undertones typical of Mediterranean & South Asian skin.'
    },
    {
      id: 'tan',
      name: 'Tan',
      hex: '#AC764E',
      description: 'Sun-kissed bronze to caramel complexion rich in natural warmth.'
    },
    {
      id: 'brown',
      name: 'Brown',
      hex: '#855234',
      description: 'Deep cocoa, roasted almond, and warm coffee complexions.'
    },
    {
      id: 'deep',
      name: 'Deep',
      hex: '#51301F',
      description: 'Rich espresso, dark chocolate, and obsidian complexions with dramatic presence.'
    }
  ],

  // Undertone definitions
  undertones: {
    warm: {
      name: 'Warm',
      icon: '☀️',
      hint: 'Gold jewelry, earthy colors, and olive/peachy tones feel effortlessly harmonious.',
      jewelryAdvice: 'Warm yellow gold, antique brass, kundan with gold backings, and warm bronze shine radiantly on you.'
    },
    cool: {
      name: 'Cool',
      icon: '❄️',
      hint: 'Silver jewelry, jewel tones, and crisp icy shades bring out your natural glow.',
      jewelryAdvice: 'Silver, oxidised silver, white gold, rhodium, platinum-tones, and gemstones like sapphire and ruby flatter you.'
    },
    neutral: {
      name: 'Neutral',
      icon: '◐',
      hint: 'A versatile balance of warm and cool; both gold and silver feel harmonious.',
      jewelryAdvice: 'You enjoy the freedom to wear both yellow gold and silver, dual-tone metals, rose gold, and pearls.'
    }
  },

  // Color Palettes by Undertone -> Skin Tone
  palettes: {
    warm: {
      fair: {
        bestColors: [
          { name: 'Warm Peach', hex: '#FFBE98', desc: 'Soft and luminous against fair warm skin' },
          { name: 'Warm Ivory', hex: '#FFF8E7', desc: 'A gentler, richer alternative to stark white' },
          { name: 'Sage Green', hex: '#87A96B', desc: 'Calming botanical earth tone' },
          { name: 'Terracotta Pink', hex: '#D98270', desc: 'Warm rosy warmth that enlivens features' },
          { name: 'Golden Honey', hex: '#E5A93C', desc: 'Luminous sun-kissed accent' },
          { name: 'Camel Tan', hex: '#C19A6B', desc: 'Timeless tailored neutral base' },
          { name: 'Moss Green', hex: '#637A47', desc: 'Grounded organic depth' }
        ],
        accentColors: [
          { name: 'Warm Coral', hex: '#E2583E', desc: 'Vibrant celebratory pop' },
          { name: 'Mustard Gold', hex: '#D4A017', desc: 'Radiant festive accent' },
          { name: 'Spiced Rust', hex: '#B7410E', desc: 'Rich autumnal depth' }
        ],
        thoughtfulColors: [
          { name: 'Icy Powder Blue', hex: '#CFE2EC', desc: 'Pair with warm creams rather than wearing alone' },
          { name: 'Stark Blue-Grey', hex: '#708090', desc: 'Add warm jewelry or scarves near the face' },
          { name: 'Neon Lime', hex: '#C6FF00', desc: 'May overpower delicate warm pigments' }
        ],
        stylingNote: 'Fair warm skin blossoms in sun-ripened, golden-tinged shades, creamy pastels, and gentle earth pigments.'
      },
      light: {
        bestColors: [
          { name: 'Apricot Cream', hex: '#FBD5AB', desc: 'Gentle, glowing daylight tone' },
          { name: 'Warm Olive', hex: '#708238', desc: 'Rich natural contrast' },
          { name: 'Warm Terracotta', hex: '#C96B4B', desc: 'Earthy warmth for casual and formal sets' },
          { name: 'Mustard Ocre', hex: '#DCAE1D', desc: 'Traditional festive vibrancy' },
          { name: 'Warm Taupe', hex: '#A8927D', desc: 'Sophisticated versatile neutral' },
          { name: 'Burnt Peach', hex: '#E88B6E', desc: 'Flattering flush for tops and kurtas' },
          { name: 'Forest Moss', hex: '#4B6639', desc: 'Deep grounded botanical shade' }
        ],
        accentColors: [
          { name: 'Marigold Yellow', hex: '#F3A505', desc: 'Festive radiance for dupattas & jackets' },
          { name: 'Brick Red', hex: '#AB3724', desc: 'Commanding traditional statement' },
          { name: 'Teal Bronze', hex: '#26615E', desc: 'Deep warm teal contrast' }
        ],
        thoughtfulColors: [
          { name: 'Cool Lavender', hex: '#B5A8C8', desc: 'Combine with ivory or camel accessories' },
          { name: 'Icy Magenta', hex: '#E0115F', desc: 'Wear lower down, away from the neckline' },
          { name: 'Ash Slate', hex: '#68727B', desc: 'Soften with gold jewelry' }
        ],
        stylingNote: 'Rich ochres, soft terracotta, and forest greens provide effortless balance and warmth.'
      },
      medium: {
        bestColors: [
          { name: 'Terracotta', hex: '#C96B4B', desc: 'Signature harmonious tone for wheatish warm skin' },
          { name: 'Warm Emerald', hex: '#19734A', desc: 'Striking regal depth' },
          { name: 'Warm Cream', hex: '#FFF1D0', desc: 'Velvety traditional neutral base' },
          { name: 'Mustard Yellow', hex: '#E1A100', desc: 'Sunlit festive tone for kurtas and sarees' },
          { name: 'Rust Orange', hex: '#B85324', desc: 'Earthy elegance for evening & daytime' },
          { name: 'Warm Olive Drab', hex: '#666C3B', desc: 'Modern safari and tailoring tone' },
          { name: 'Deep Cinnamon', hex: '#7B3F00', desc: 'Luxurious rich layer color' }
        ],
        accentColors: [
          { name: 'Turquoise Green', hex: '#008B8B', desc: 'High-energy festive pairing' },
          { name: 'Rich Saffron', hex: '#FF7722', desc: 'Auspicious celebratory brilliance' },
          { name: 'Pomegranate Red', hex: '#9E1B32', desc: 'Warm bridal and banquet glow' }
        ],
        thoughtfulColors: [
          { name: 'Icy Pastel Lilac', hex: '#D8BFD8', desc: 'Can appear muted without a warm overlay' },
          { name: 'Stark Cool Grey', hex: '#808A91', desc: 'Best layered with gold accents' },
          { name: 'Chilly Pale Pink', hex: '#FADADD', desc: 'Replace with peachy coral or warm blush' }
        ],
        stylingNote: 'Medium warm tones hold vivid Indian festive hues—saffron, emerald, and rust—with natural elegance.'
      },
      olive: {
        bestColors: [
          { name: 'Warm Pistachio', hex: '#93C572', desc: 'Highlights natural golden-green undertones' },
          { name: 'Burnished Gold', hex: '#C59B27', desc: 'Rich metallic radiance for ethnic wear' },
          { name: 'Deep Olive', hex: '#556B2F', desc: 'Flawless tonal harmony' },
          { name: 'Earthy Ochre', hex: '#CC7722', desc: 'Warm desert sophistication' },
          { name: 'Toasted Almond', hex: '#AB8563', desc: 'Subtle daily tailoring neutral' },
          { name: 'Warm Aubergine', hex: '#4A2341', desc: 'Deep warm plum for evening wear' },
          { name: 'Spiced Marsala', hex: '#873940', desc: 'Rich grounded wine hue' }
        ],
        accentColors: [
          { name: 'Peacock Gold', hex: '#8F7A1E', desc: 'Exquisite contrast for border details' },
          { name: 'Copper Rust', hex: '#B85324', desc: 'Brings out olive skin warmth' },
          { name: 'Spiced Amber', hex: '#FFBF00', desc: 'Luminous statement accent' }
        ],
        thoughtfulColors: [
          { name: 'Chilly Ash Grey', hex: '#778899', desc: 'May create an ashen cast; layer with camel' },
          { name: 'Pale Mint Milk', hex: '#D4EDDA', desc: 'Deepen to sage or olive instead' },
          { name: 'Bleached White', hex: '#F8F9FA', desc: 'Warm ivory or ecru feels much softer' }
        ],
        stylingNote: 'Olive complexions look regal in burnished gold, deep moss, copper, and warm wine tones.'
      },
      tan: {
        bestColors: [
          { name: 'Warm Saffron', hex: '#F38118', desc: 'Vibrant and energizing on tan skin' },
          { name: 'Deep Teal Green', hex: '#00585E', desc: 'Dramatic rich contrast' },
          { name: 'Warm Terracotta', hex: '#B85324', desc: 'Natural earthy resonance' },
          { name: 'Golden Sand', hex: '#E0C097', desc: 'Crisp contemporary linen shade' },
          { name: 'Spiced Cinnamon', hex: '#8D4004', desc: 'Sensual warmth for lehengas & blazers' },
          { name: 'Olive Bronze', hex: '#6E6133', desc: 'Understated evening luxury' },
          { name: 'Warm Claret Red', hex: '#8B1E2B', desc: 'Majestic festive color' }
        ],
        accentColors: [
          { name: 'Marigold Bloom', hex: '#EAA221', desc: 'Celebratory pop against bronze skin' },
          { name: 'Warm Jade', hex: '#2E8B57', desc: 'Crisp jewel contrast' },
          { name: 'Burnt Tangerine', hex: '#D35400', desc: 'Expressive weekend & resort hue' }
        ],
        thoughtfulColors: [
          { name: 'Pale Frost Blue', hex: '#D4E6F1', desc: 'Anchor with deep indigo or bronze accessories' },
          { name: 'Chalky Baby Pink', hex: '#FADBD8', desc: 'Opt for warm rose-gold or coral pink' },
          { name: 'Dull Concrete Grey', hex: '#6B7280', desc: 'Infuse with warm brass accessories' }
        ],
        stylingNote: 'Tan warm skin carries saturated earthy shades, spiced citrus, and deep forest hues with commanding ease.'
      },
      brown: {
        bestColors: [
          { name: 'Royal Gold', hex: '#D4AF37', desc: 'Luminous and majestic contrast' },
          { name: 'Rich Copper', hex: '#B87333', desc: 'Warm metallic shimmer' },
          { name: 'Deep Forest Emerald', hex: '#0B472A', desc: 'High-contrast regal depth' },
          { name: 'Warm Cinnamon', hex: '#7A3803', desc: 'Monochromatic richness' },
          { name: 'Spiced Amber', hex: '#E67E22', desc: 'Exquisite radiance for kurtas & shirts' },
          { name: 'Cream Ivory', hex: '#FFF3CD', desc: 'Stunning bright contrast' },
          { name: 'Warm Burgundy', hex: '#6B1724', desc: 'Opulent evening elegance' }
        ],
        accentColors: [
          { name: 'Bright Canary Yellow', hex: '#FFD700', desc: 'Sensational festive focal point' },
          { name: 'Warm Turquoise', hex: '#1E90B0', desc: 'Vivid, fresh pop of color' },
          { name: 'Vibrant Coral Flame', hex: '#FF5733', desc: 'Dramatic and uplifting' }
        ],
        thoughtfulColors: [
          { name: 'Muddy Drab Grey', hex: '#58595B', desc: 'Lacks radiance; choose warm charcoal instead' },
          { name: 'Pale Chalk Violet', hex: '#D1C4E9', desc: 'Combine with deep plum or gold jewelry' },
          { name: 'Washed-out Beige', hex: '#D8C7A5', desc: 'Opt for rich ivory or warm caramel' }
        ],
        stylingNote: 'Rich brown warm skin looks captivating in saturated saffron, bright canary, deep forest emerald, and copper.'
      },
      deep: {
        bestColors: [
          { name: 'Vibrant Marigold', hex: '#FFA500', desc: 'Sensational high-contrast radiance' },
          { name: 'Polished Gold', hex: '#DFB15B', desc: 'Exquisite gleam on deep skin' },
          { name: 'Emerald Velvet', hex: '#00563B', desc: 'Rich, stately gem tone' },
          { name: 'Warm Terracotta Brick', hex: '#A83B24', desc: 'Warm earthy sophistication' },
          { name: 'Warm Ivory White', hex: '#FFF8DC', desc: 'Clean, breathtaking contrast' },
          { name: 'Electric Tangerine', hex: '#E65100', desc: 'Striking festive standout' },
          { name: 'Spiced Bronze', hex: '#6E4720', desc: 'Luxurious tonal depth' }
        ],
        accentColors: [
          { name: 'Sunburst Ochre', hex: '#F4B400', desc: 'Vibrant focal piece' },
          { name: 'Warm Crimson', hex: '#9B111E', desc: 'Royal traditional presence' },
          { name: 'Warm Chartreuse', hex: '#7FFF00', desc: 'Modern high-fashion statement' }
        ],
        thoughtfulColors: [
          { name: 'Dingy Brownish Grey', hex: '#423D3A', desc: 'Low visual clarity; choose crisp espresso instead' },
          { name: 'Dusty Pale Blue', hex: '#B0C4DE', desc: 'Pair with warm gold borders or vibrant silks' },
          { name: 'Muted Pale Taupe', hex: '#9E978E', desc: 'Swap for warm ivory or rich toffee' }
        ],
        stylingNote: 'Deep warm complexions have exceptional presence in high-contrast saturated warm tones, bright golds, and fiery rusts.'
      }
    },

    cool: {
      fair: {
        bestColors: [
          { name: 'Icy Powder Blue', hex: '#B0E0E6', desc: 'Refreshing clarity for blouses and kurtas' },
          { name: 'Cool Rose Pink', hex: '#E6A8B7', desc: 'Delicate floral harmony' },
          { name: 'Crisp Pure White', hex: '#FFFFFF', desc: 'Clean, luminous architecture' },
          { name: 'Emerald Jewel', hex: '#097969', desc: 'Striking contrast against porcelain skin' },
          { name: 'Soft Lavender', hex: '#BDB0D0', desc: 'Romantic and serene tone' },
          { name: 'Slate Grey', hex: '#708090', desc: 'Tailored modern neutral' },
          { name: 'Midnight Navy', hex: '#1B263B', desc: 'Classic regal anchor' }
        ],
        accentColors: [
          { name: 'Ruby Red', hex: '#9B111E', desc: 'Rich dramatic contrast' },
          { name: 'Royal Sapphire', hex: '#0F52BA', desc: 'Cool jewel brilliance' },
          { name: 'Cool Magenta', hex: '#CA1F7B', desc: 'Bold festive statement' }
        ],
        thoughtfulColors: [
          { name: 'Mustard Brown', hex: '#B57E10', desc: 'Can clash with cool pink undertones' },
          { name: 'Muddy Orange', hex: '#CC5500', desc: 'Better replaced by cool watermelon or berry' },
          { name: 'Warm Olive Khaki', hex: '#808000', desc: 'Swap for cool pine green or slate' }
        ],
        stylingNote: 'Fair cool skin radiates in crisp jewel tones, icy pastels, pure whites, and silvery slate blues.'
      },
      light: {
        bestColors: [
          { name: 'Cool Dusty Rose', hex: '#C08081', desc: 'Elegant and understated' },
          { name: 'Periwinkle Blue', hex: '#8E9AAF', desc: 'Sophisticated modern hue' },
          { name: 'Cool Pine Green', hex: '#2D5A4C', desc: 'Rich botanical depth' },
          { name: 'Deep Navy', hex: '#1D2A44', desc: 'Sharp formal base' },
          { name: 'Lilac Fog', hex: '#A29BFE', desc: 'Dreamy soft ethnic tone' },
          { name: 'Silver Grey', hex: '#A6A6A6', desc: 'Refined tailored neutral' },
          { name: 'Cool Berry', hex: '#8E2849', desc: 'Flattering evening shade' }
        ],
        accentColors: [
          { name: 'Cool Fuchsia', hex: '#C12267', desc: 'High-energy wedding pop' },
          { name: 'Cobalt Blue', hex: '#0047AB', desc: 'Crisp modern edge' },
          { name: 'Icy Mint', hex: '#A8E6CF', desc: 'Breezy summer pastel' }
        ],
        thoughtfulColors: [
          { name: 'Warm Terracotta', hex: '#C96B4B', desc: 'Pair with silver jewelry to cool down' },
          { name: 'Caramel Tan', hex: '#AF6E4D', desc: 'Opt for cool taupe or charcoal' },
          { name: 'Mustard Ocre', hex: '#C8963E', desc: 'May dull the complexion' }
        ],
        stylingNote: 'Cool light skin looks balanced in berry tones, dusty rose, periwinkle, and deep midnight navy.'
      },
      medium: {
        bestColors: [
          { name: 'Royal Sapphire Blue', hex: '#1D4E89', desc: 'Commanding jewel presence' },
          { name: 'Cool Magenta Pink', hex: '#B8255F', desc: 'Vibrant Indian celebratory hue' },
          { name: 'Pine Forest Green', hex: '#1B4D3E', desc: 'Regal and flattering' },
          { name: 'Cool Wine Burgundy', hex: '#6E1B32', desc: 'Velvety evening depth' },
          { name: 'Steel Blue', hex: '#4682B4', desc: 'Versatile contemporary base' },
          { name: 'Charcoal Slate', hex: '#374151', desc: 'Polished tailoring foundation' },
          { name: 'Cool Plum', hex: '#582C4D', desc: 'Rich festive depth' }
        ],
        accentColors: [
          { name: 'Vibrant Raspberry', hex: '#E30B5C', desc: 'Eye-catching drape color' },
          { name: 'Electric Cobalt', hex: '#0020C2', desc: 'Striking modern Indo-western accent' },
          { name: 'Icy Silver', hex: '#C0C0C0', desc: 'Luminous metallic border tone' }
        ],
        thoughtfulColors: [
          { name: 'Yellow Ochre', hex: '#C68B59', desc: 'Can appear heavy; choose lemon or cool gold' },
          { name: 'Warm Rust', hex: '#B7410E', desc: 'Substitute with rich berry wine' },
          { name: 'Warm Olive Khaki', hex: '#556B2F', desc: 'Cool forest teal serves you better' }
        ],
        stylingNote: 'Medium cool skin shines brilliantly in sapphire, magenta, deep pine, and berry tones.'
      },
      olive: {
        bestColors: [
          { name: 'Cool Teal', hex: '#006D77', desc: 'Harmonises beautifully with cool olive undertones' },
          { name: 'Deep Plum Wine', hex: '#4A154B', desc: 'Dramatic and sophisticated' },
          { name: 'Silver Charcoal', hex: '#4A5568', desc: 'Sleek modern neutral' },
          { name: 'Sea Pine Green', hex: '#19535F', desc: 'Rich oceanic balance' },
          { name: 'Berry Cranberry', hex: '#83213A', desc: 'Flattering flush for silk & linen' },
          { name: 'Cool Navy', hex: '#1A365D', desc: 'Staple ethnic and formal tone' },
          { name: 'Icy Sage', hex: '#94D2BD', desc: 'Airy summer celebration tone' }
        ],
        accentColors: [
          { name: 'Vivid Violet', hex: '#7209B7', desc: 'Festive showstopper' },
          { name: 'Cool Emerald', hex: '#0B6623', desc: 'Regal Indian wedding staple' },
          { name: 'Silver Rhodium', hex: '#E2E8F0', desc: 'Clean metallic accent' }
        ],
        thoughtfulColors: [
          { name: 'Warm Mustard', hex: '#D4A017', desc: 'Can clash with cool olive tones' },
          { name: 'Warm Brick Orange', hex: '#C0392B', desc: 'Choose cool crimson instead' },
          { name: 'Warm Camel Beige', hex: '#C19A6B', desc: 'Cool grey-beige creates cleaner lines' }
        ],
        stylingNote: 'Cool olive skin looks breathtaking in cool teals, jewel plums, ocean greens, and silver accents.'
      },
      tan: {
        bestColors: [
          { name: 'Vibrant Cobalt', hex: '#0047AB', desc: 'Striking contrast against bronze skin' },
          { name: 'Cool Ruby Crimson', hex: '#841B2D', desc: 'Regal and celebratory' },
          { name: 'Deep Pine Teal', hex: '#0B5351', desc: 'Rich jewel depth' },
          { name: 'Rich Violet Purple', hex: '#581845', desc: 'Majestic silk shade' },
          { name: 'Crisp Optic White', hex: '#F8FAFC', desc: 'Stunning bright pop on tan complexion' },
          { name: 'Cool Slate Charcoal', hex: '#2D3748', desc: 'Impeccable evening foundation' },
          { name: 'Cool Mulberry', hex: '#6F2232', desc: 'Luxurious drape tone' }
        ],
        accentColors: [
          { name: 'Electric Turquoise', hex: '#00CED1', desc: 'Dynamic festive brightness' },
          { name: 'Hot Raspberry', hex: '#C71585', desc: 'High-drama dupatta or jacket' },
          { name: 'Burnished Silver', hex: '#A0AEC0', desc: 'Refined zardozi work tone' }
        ],
        thoughtfulColors: [
          { name: 'Muddy Khaki Beige', hex: '#8B7D6B', desc: 'Can appear flat; choose crisp slate' },
          { name: 'Warm Mustard Ochre', hex: '#B8860B', desc: 'Replace with cool lemon or silver' },
          { name: 'Burnt Terracotta', hex: '#A04000', desc: 'Cool berries offer clearer harmony' }
        ],
        stylingNote: 'Tan cool skin commands attention in electric cobalt, crisp optic white, cool ruby, and mulberry.'
      },
      brown: {
        bestColors: [
          { name: 'Vivid Royal Blue', hex: '#2B4C7E', desc: 'Breathtaking clarity on brown skin' },
          { name: 'Rich Magenta Fuchsia', hex: '#A81D60', desc: 'Sensational festive energy' },
          { name: 'Deep Emerald Teal', hex: '#004D40', desc: 'Royal traditional sophistication' },
          { name: 'Pure White Linen', hex: '#FFFFFF', desc: 'High-contrast brilliance' },
          { name: 'Cool Black Cherry', hex: '#4A0E17', desc: 'Dark romantic elegance' },
          { name: 'Silver Smoke', hex: '#718096', desc: 'Tailored neutral layer' },
          { name: 'Deep Amethyst', hex: '#4B0082', desc: 'Jewel-toned opulence' }
        ],
        accentColors: [
          { name: 'Neon Icy Pink', hex: '#FF1493', desc: 'Modern high-contrast festival tone' },
          { name: 'Electric Azure', hex: '#007FFF', desc: 'Bright, bold accessory tone' },
          { name: 'Cool Platinum', hex: '#E5E7EB', desc: 'Polished silver contrast' }
        ],
        thoughtfulColors: [
          { name: 'Drab Olive Brown', hex: '#4D432F', desc: 'Muted visual impact; use rich jewel tones' },
          { name: 'Warm Ochre Mustard', hex: '#9E782F', desc: 'Cool jewel tones flatter much better' },
          { name: 'Faded Peach Cream', hex: '#EED9C4', desc: 'Opt for pure white or cool ice pink' }
        ],
        stylingNote: 'Brown cool skin looks royalty-grade in royal blue, magenta fuchsia, pure white, and deep amethyst.'
      },
      deep: {
        bestColors: [
          { name: 'Optic Crisp White', hex: '#FFFFFF', desc: 'Breathtaking iconic contrast' },
          { name: 'Electric Royal Sapphire', hex: '#1034A6', desc: 'Pure visual power' },
          { name: 'Cool Vivid Ruby', hex: '#A00034', desc: 'Commanding festive presence' },
          { name: 'Emerald Jewel', hex: '#006400', desc: 'Rich, stately depth' },
          { name: 'Vibrant Orchid Purple', hex: '#7B1FA2', desc: 'Luminous and artistic' },
          { name: 'Cool Magenta', hex: '#C2185B', desc: 'High-impact silk and lehenga shade' },
          { name: 'Silver Chromium', hex: '#D1D5DB', desc: 'Shimmering metallic embroidery base' }
        ],
        accentColors: [
          { name: 'Fluorescent Cool Teal', hex: '#00B4D8', desc: 'Dynamic focal pop' },
          { name: 'Vivid Cerise', hex: '#D81B60', desc: 'Show-stopping festival accent' },
          { name: 'Cool Ice Mint', hex: '#7FFFD4', desc: 'Fresh crisp contrast' }
        ],
        thoughtfulColors: [
          { name: 'Muddy Warm Charcoal', hex: '#3E3430', desc: 'Low clarity; choose pure cool black or optic white' },
          { name: 'Dull Murky Khaki', hex: '#4F4C3B', desc: 'Jewel tones bring far more luminosity' },
          { name: 'Warm Terracotta Brick', hex: '#873426', desc: 'Cool rubies provide sharper harmony' }
        ],
        stylingNote: 'Deep cool skin achieves high-fashion editorial impact in crisp whites, sapphire, radiant magenta, and icy mints.'
      }
    },

    neutral: {
      fair: {
        bestColors: [
          { name: 'Soft Rose Quartz', hex: '#F7CAC9', desc: 'Gentle, balanced pink' },
          { name: 'Classic Navy', hex: '#1E3A8A', desc: 'Universal anchoring neutral' },
          { name: 'Soft Jade', hex: '#70A9A1', desc: 'Serene balanced green' },
          { name: 'Dusty Plum', hex: '#6B4C6E', desc: 'Flattering transitional tone' },
          { name: 'Ivory Cream', hex: '#FBF8F3', desc: 'Natural soft light' },
          { name: 'Charcoal Grey', hex: '#4B5563', desc: 'Clean tailored structure' },
          { name: 'Warm Taupe Rose', hex: '#B39283', desc: 'Understated daily neutral' }
        ],
        accentColors: [
          { name: 'Muted Coral Berry', hex: '#D65A6E', desc: 'Harmonious focal color' },
          { name: 'Soft Teal', hex: '#319795', desc: 'Fresh adaptable shade' },
          { name: 'Champagne Gold', hex: '#E6D3A3', desc: 'Neutral metallic glow' }
        ],
        thoughtfulColors: [
          { name: 'Extreme Neon Orange', hex: '#FF6F00', desc: 'May overpower neutral balance' },
          { name: 'Stark Acid Yellow', hex: '#CCFF00', desc: 'Opt for butter yellow or champagne' },
          { name: 'Bleached Chalk Grey', hex: '#CBD5E1', desc: 'Layer with warmer accessories' }
        ],
        stylingNote: 'Fair neutral skin excels in soft pastels, dusty plums, balanced teals, and champagne metallics.'
      },
      light: {
        bestColors: [
          { name: 'Earthy Rose', hex: '#B87D7D', desc: 'Warm yet cool balance' },
          { name: 'Muted Spruce Green', hex: '#3B6E60', desc: 'Refined botanical neutral' },
          { name: 'Classic French Navy', hex: '#203A63', desc: 'Timeless sartorial staple' },
          { name: 'Warm Sand', hex: '#D2B48C', desc: 'Effortless linen tone' },
          { name: 'Dusty Mulberry', hex: '#7A3E54', desc: 'Romantic and poised' },
          { name: 'Soft Charcoal', hex: '#404B57', desc: 'Tailored versatility' },
          { name: 'Warm Biscuit', hex: '#E3CDB2', desc: 'Gentle daytime layer' }
        ],
        accentColors: [
          { name: 'Teal Blue', hex: '#147A82', desc: 'Fresh, confident accent' },
          { name: 'Spiced Berry', hex: '#9E3852', desc: 'Flattering evening statement' },
          { name: 'Pale Amber', hex: '#E5A93C', desc: 'Subtle festive warmth' }
        ],
        thoughtfulColors: [
          { name: 'High-voltage Neon', hex: '#39FF14', desc: 'Tones that fight neutral undertone calm' },
          { name: 'Stark Blue Chalk', hex: '#B4C6D4', desc: 'Warm up with leather or pearl accents' },
          { name: 'Heavy Mud Brown', hex: '#48382C', desc: 'Choose espresso or soft charcoal instead' }
        ],
        stylingNote: 'Light neutral skin wears both warm sands and cool sprue greens with easy confidence.'
      },
      medium: {
        bestColors: [
          { name: 'Warm Berry Wine', hex: '#722F37', desc: 'Rich, universal South Asian staple' },
          { name: 'Forest Teal', hex: '#165B5E', desc: 'Jewel-toned poise' },
          { name: 'Muted Terracotta', hex: '#BA6654', desc: 'Grounded daytime warmth' },
          { name: 'Rich Navy Blue', hex: '#172554', desc: 'Flawless ethnic and formal suit color' },
          { name: 'Soft Olive Gold', hex: '#877B4A', desc: 'Harmonious festive shade' },
          { name: 'Warm Ivory', hex: '#F9F5EC', desc: 'Clean, flattering neutral' },
          { name: 'Deep Cocoa Brown', hex: '#523A28', desc: 'Luxurious earthy depth' }
        ],
        accentColors: [
          { name: 'Peacock Teal', hex: '#005F73', desc: 'Dynamic wedding guest favorite' },
          { name: 'Spiced Coral', hex: '#E07A5F', desc: 'Lively celebration tone' },
          { name: 'Antique Gold', hex: '#C5A059', desc: 'Timeless zardozi and jewelry tone' }
        ],
        thoughtfulColors: [
          { name: 'Cold Ash Grey', hex: '#64748B', desc: 'Soften with gold or warm beige layers' },
          { name: 'Extreme Lime Yellow', hex: '#D4E157', desc: 'Swap for warm chartreuse or olive' },
          { name: 'Icy Baby Blue', hex: '#BAE6FD', desc: 'Opt for steel blue or rich teal' }
        ],
        stylingNote: 'Medium neutral skin has immense versatility, effortlessly bridging berry wines, forest teals, and antique gold.'
      },
      olive: {
        bestColors: [
          { name: 'Deep Sage Green', hex: '#4F772D', desc: 'Deepens natural olive warmth' },
          { name: 'Warm Wine Maroon', hex: '#6A040F', desc: 'Timeless festive majesty' },
          { name: 'Smoky Teal', hex: '#264653', desc: 'Architectural modern neutral' },
          { name: 'Toasted Caramel', hex: '#9C6644', desc: 'Rich day-to-night tone' },
          { name: 'Midnight Blue', hex: '#0B2545', desc: 'Polished tailoring anchor' },
          { name: 'Warm Ecru', hex: '#F5EBE0', desc: 'Clean organic texture base' },
          { name: 'Burnished Bronze', hex: '#8C5E28', desc: 'Festive metallic glow' }
        ],
        accentColors: [
          { name: 'Amber Ochre', hex: '#E76F51', desc: 'Warm, magnetic energy' },
          { name: 'Deep Emerald', hex: '#137547', desc: 'Classic Indian ethnic color' },
          { name: 'Rose Gold', hex: '#B76E79', desc: 'Soft metallic hybrid' }
        ],
        thoughtfulColors: [
          { name: 'Stark Silver Blue', hex: '#A0B2C6', desc: 'Add warm scarves or jewelry' },
          { name: 'Pale Pastel Green', hex: '#D8F3DC', desc: 'Darken to sage or olive' },
          { name: 'Washed Lilac', hex: '#D6C7DE', desc: 'Choose deep plum or wine instead' }
        ],
        stylingNote: 'Olive neutral skin is legendary for carrying earthy greens, burnished bronze, and warm wine maroon.'
      },
      tan: {
        bestColors: [
          { name: 'Deep Saffron Ochre', hex: '#D97706', desc: 'Radiant on sun-kissed tan skin' },
          { name: 'Deep Emerald Pine', hex: '#064E3B', desc: 'Stately traditional poise' },
          { name: 'Rich Wine Cranberry', hex: '#7F1D1D', desc: 'Opulent festive presence' },
          { name: 'Navy Cobalt', hex: '#1E3A8A', desc: 'Sharp tailoring foundation' },
          { name: 'Warm Biscuit Cream', hex: '#FEF3C7', desc: 'Bright, luxurious contrast' },
          { name: 'Toffee Brown', hex: '#78350F', desc: 'Rich monochrome layer' },
          { name: 'Warm Pewter Teal', hex: '#115E59', desc: 'Sophisticated modern hue' }
        ],
        accentColors: [
          { name: 'Vibrant Coral Rust', hex: '#EA580C', desc: 'Energetic celebration tone' },
          { name: 'Royal Persian Blue', hex: '#2563EB', desc: 'Dramatic contrast drape' },
          { name: 'Dual-tone Bronze Gold', hex: '#CA8A04', desc: 'Luminous ethnic embroidery' }
        ],
        thoughtfulColors: [
          { name: 'Muddy Pale Olive', hex: '#626447', desc: 'Lacks clarity; go deeper into emerald' },
          { name: 'Cold Chalk White', hex: '#E2E8F0', desc: 'Warm ivory or cream feels much richer' },
          { name: 'Drab Mauve Grey', hex: '#6B6068', desc: 'Choose rich cranberry instead' }
        ],
        stylingNote: 'Tan neutral skin enjoys remarkable flexibility across saffron, deep emerald, rich wine, and cobalt.'
      },
      brown: {
        bestColors: [
          { name: 'Warm Marigold Gold', hex: '#EAB308', desc: 'Spectacular bright contrast' },
          { name: 'Regal Ruby Wine', hex: '#881337', desc: 'Opulent festive royalty' },
          { name: 'Deep Teal Marine', hex: '#042F2E', desc: 'Mysterious, dignified depth' },
          { name: 'Rich Cream White', hex: '#FEF9C3', desc: 'Luminous, crisp visual pop' },
          { name: 'Spiced Copper Rust', hex: '#C2410C', desc: 'Warm metallic earthiness' },
          { name: 'Midnight Charcoal', hex: '#1E293B', desc: 'Refined modern tailoring' },
          { name: 'Forest Jade', hex: '#065F46', desc: 'Classic Indian handloom staple' }
        ],
        accentColors: [
          { name: 'Electric Turquoise', hex: '#06B6D4', desc: 'Dynamic contemporary edge' },
          { name: 'Bright Mango Yellow', hex: '#FACC15', desc: 'Joyful celebratory accent' },
          { name: 'Rose Gold Metallic', hex: '#BE7883', desc: 'Subtle shimmer finish' }
        ],
        thoughtfulColors: [
          { name: 'Flat Cement Grey', hex: '#4B5563', desc: 'Choose deep charcoal with texture instead' },
          { name: 'Muted Pale Taupe', hex: '#A8A29E', desc: 'Opt for rich cream or deep toffee' },
          { name: 'Washed-out Pastel Pink', hex: '#FBCFE8', desc: 'Go for vibrant coral or ruby wine' }
        ],
        stylingNote: 'Brown neutral skin commands attention in marigold, regal ruby, crisp cream, and forest jade.'
      },
      deep: {
        bestColors: [
          { name: 'Bright Pure White', hex: '#FFFFFF', desc: 'Iconic, cinematic contrast' },
          { name: 'Vibrant Sunflower Gold', hex: '#FBBF24', desc: 'Radiant regal brilliance' },
          { name: 'Royal Emerald', hex: '#047857', desc: 'Rich, stately celebration tone' },
          { name: 'Crimson Wine', hex: '#991B1B', desc: 'Dignified festive color' },
          { name: 'Electric Cobalt', hex: '#1D4ED8', desc: 'Modern high-contrast punch' },
          { name: 'Warm Terracotta Coral', hex: '#DC2626', desc: 'Fiery, confident statement' },
          { name: 'Deep Amethyst Violet', hex: '#581C87', desc: 'Luxurious evening mystery' }
        ],
        accentColors: [
          { name: 'Chartreuse Lime', hex: '#84CC16', desc: 'High-fashion editorial pop' },
          { name: 'Bright Tangerine', hex: '#F97316', desc: 'Dynamic festival focal point' },
          { name: 'Mixed Metal Platinum-Gold', hex: '#E2E8F0', desc: 'Dazzling dual metallic shimmer' }
        ],
        thoughtfulColors: [
          { name: 'Low-contrast Mud Brown', hex: '#3B2F2F', desc: 'Choose obsidian black or rich cream' },
          { name: 'Drab Grey Khaki', hex: '#44403C', desc: 'Wear high-saturation jewel tones instead' },
          { name: 'Faded Pale Lavender', hex: '#DDD6FE', desc: 'Deepen into regal royal amethyst' }
        ],
        stylingNote: 'Deep neutral skin creates show-stopping looks in optic white, sunflower gold, cobalt, and rich amethyst.'
      }
    }
  },

  // Color Themes (adaptable to undertone)
  colorThemes: {
    earthyNeutrals: {
      id: 'earthy',
      title: 'Earthy Neutrals',
      subtitle: 'Cream + Olive + Camel + Brown',
      description: 'Grounded, effortless, and easy to mix across everyday linen, raw silk, and relaxed tailoring.',
      colors: [
        { name: 'Ivory Cream', hex: '#FDFBF7' },
        { name: 'Olive Leaf', hex: '#606C38' },
        { name: 'Camel Tan', hex: '#C19A6B' },
        { name: 'Warm Espresso', hex: '#3E2A20' }
      ],
      stylingTip: 'Mix different fabric weights—like a textured khadi kurta with smooth cotton trousers—to give neutral palettes rich dimension.'
    },
    jewelTones: {
      id: 'jewel',
      title: 'Jewel Tones',
      subtitle: 'Emerald + Berry + Sapphire + Teal',
      description: 'Rich, confident, and expressive. Ideal for Indian wedding celebrations, festive dinners, and evening occasions.',
      colors: [
        { name: 'Royal Emerald', hex: '#0B6623' },
        { name: 'Deep Berry', hex: '#781D42' },
        { name: 'Sapphire Blue', hex: '#0F52BA' },
        { name: 'Peacock Teal', hex: '#005F73' }
      ],
      stylingTip: 'Pair one dominant jewel tone with metallic borders or delicate silver/gold jewelry for instant regal balance.'
    },
    softContrast: {
      id: 'contrast',
      title: 'Soft Contrast',
      subtitle: 'Soft Pink + Denim + Cream + Mauve',
      description: 'Balanced, gentle, and polished. Offers a breezy aesthetic suitable for day ceremonies, brunch, and creative workwear.',
      colors: [
        { name: 'Blush Rose', hex: '#E8B4B8' },
        { name: 'Muted Denim', hex: '#6C7A89' },
        { name: 'Alabaster Cream', hex: '#FAF3E0' },
        { name: 'Dusty Mauve', hex: '#A37081' }
      ],
      stylingTip: 'Soft contrast relies on subtle tonal harmony. Keep shoe and bag hardware minimal for an understated, editorial look.'
    }
  },

  // Outfit recommendations categorized by styling preference & occasion
  outfitRecommendations: {
    feminine: {
      casual: [
        {
          title: 'Cotton Mulmul Kurta + Straight Pants',
          description: 'Breathable A-line kurta in palette neutrals, paired with cropped ankle trousers and comfortable open flats.',
          fabrics: 'Mulmul cotton, breathable linen, or lightweight khadi',
          silhouette: 'Relaxed silhouette with breathable movement'
        },
        {
          title: 'Linen Co-ord Set with Statement Scarf',
          description: 'Monochrome tailored tunic top with wide-leg culottes, accented by a contrasting printed dupatta or silk scarf.',
          fabrics: 'Washed European linen or textured slub cotton',
          silhouette: 'Proportional, clean geometric lines'
        },
        {
          title: 'Layered Chanderi Tunic + Relaxed Denim',
          description: 'Contemporary fusion: side-slit handloom tunic worn over relaxed straight-leg denim and minimal metallic studs.',
          fabrics: 'Semi-sheer Chanderi cotton and soft indigo denim',
          silhouette: 'Flowing drape balanced by structured denim'
        }
      ],
      formal: [
        {
          title: 'Handloom Saree with Structured Boat-Neck Blouse',
          description: 'Tussar or raw silk handloom saree with sleek minimal border, paired with an elbow-length structured blouse and heirloom watch.',
          fabrics: 'Tussar silk, Chanderi, or handwoven Maheshwari',
          silhouette: 'Sculpted drape creating regal posture'
        },
        {
          title: 'Tailored Trouser Suit with Silk Cami',
          description: 'High-waisted pleated trousers, coordinated notched blazer in deep palette tone, and a fluid silk camisole.',
          fabrics: 'Tropical wool blend or structured linen-viscose',
          silhouette: 'Architectural shoulder line with comfortable drape'
        },
        {
          title: 'Structured Angrakha Kurta Set',
          description: 'Wrap-front Angrakha tunic with tailored pencil cigarette trousers and clean pointed mules.',
          fabrics: 'Silk-cotton blend with subtle zari piping',
          silhouette: 'Comfortable cross-front closure that flatters naturally'
        }
      ],
      party: [
        {
          title: 'Modern Organza Saree + Embroidered Bustier',
          description: 'Airy translucent organza saree with delicate scalloped edges, draped over a tone-matched bustier or statement blouse.',
          fabrics: 'Crisp organza, Italian satin, and glass-bead hand embroidery',
          silhouette: 'Ethereal volume with delicate structure'
        },
        {
          title: 'Contemporary Cape & Wide-Leg Co-ord',
          description: 'Floor-length sheer embroidered cape worn over an embellished crop top and flowing palazzo pants.',
          fabrics: 'Georgette, modal silk, and micro-sequin borders',
          silhouette: 'Sweeping fluid drama that is easy to move and dance in'
        },
        {
          title: 'Jewel-Toned Velvet Kurta & Flared Sharara',
          description: 'Plush velvet short kurta with zardozi neckline, paired with a multi-tiered flared sharara and sheer dupatta.',
          fabrics: 'Micro-velvet and soft net dupatta',
          silhouette: 'Rich vintage grandeur with balanced movement'
        }
      ],
      ethnic: [
        {
          title: 'Classic Handwoven Kanjeevaram / Banarasi Saree',
          description: 'Heritage handwoven silk saree with contrasting pallu and delicate zari motifs, paired with traditional temple jewelry.',
          fabrics: 'Pure mulberry silk with real or tested zari',
          silhouette: 'Timeless traditional drape with ceremonial stature'
        },
        {
          title: 'Kalidar Flared Anarkali Suit',
          description: 'Full-flared Anarkali with 16 kalis (panels) in jewel tone, complemented by a churidar and heavily bordered dupatta.',
          fabrics: 'Georgette, raw silk bodice, and soft cotton lining',
          silhouette: 'Flowing, graceful swirl prioritizing ease of movement'
        },
        {
          title: 'Handcrafted Kurta-Palazzo Set with Gotapatti',
          description: 'Straight-cut handloom kurta with gotapatti detailing on cuffs and neckline, paired with breezy flared palazzos.',
          fabrics: 'Chanderi silk, cotton silk, or modal satin',
          silhouette: 'Comfort-first silhouette with regal festive charm'
        },
        {
          title: 'Lightweight Festive Lehenga with Can-Can Ease',
          description: 'Pleated raw silk or modal lehenga skirt with minimalist threadwork, paired with a sweetheart blouse and net dupatta.',
          fabrics: 'Raw silk, organza, and cotton voile lining',
          silhouette: 'Comfortable waist fit with soft flared movement'
        }
      ]
    },

    masculine: {
      casual: [
        {
          title: 'Khadi Short Kurta + Straight Chinos',
          description: 'Mandarin collar short kurta in earthy palette shade, rolled cuffs, paired with relaxed cotton chinos and loafers.',
          fabrics: 'Organic handspun khadi, linen-cotton blend',
          silhouette: 'Relaxed silhouette with breathable ease'
        },
        {
          title: 'Linen Camp-Collar Shirt + Relaxed Trousers',
          description: 'Textured linen short-sleeve shirt in palette neutral, paired with drawstring pleated trousers and leather sandals.',
          fabrics: '100% pure slub linen',
          silhouette: 'Airy, unstructured comfort'
        },
        {
          title: 'Layered Long Kurta + Straight Denim',
          description: 'Knee-length cotton kurta worn unbuttoned over a white supima cotton tee and relaxed indigo selvedge jeans.',
          fabrics: 'Cotton mulmul or slub cotton jersey',
          silhouette: 'Modern Indo-casual layering'
        }
      ],
      formal: [
        {
          title: 'Structured Bandhgala Suit (Jodhpuri)',
          description: 'Tailored bespoke Bandhgala jacket in midnight navy, charcoal, or deep olive, paired with matching trousers and oxford shoes.',
          fabrics: 'Fine wool blend, raw silk, or heavy suiting twill',
          silhouette: 'Crisp military-inspired structure with poised shoulders'
        },
        {
          title: 'Nehru Jacket over Crisp Kurta Set',
          description: 'Fitted sleeveless Nehru vest in textured raw silk over a classic white or cream poplin kurta-churidar set.',
          fabrics: 'Tussar silk jacket over crisp Egyptian cotton kurta',
          silhouette: 'Clean vertical lines highlighting the torso'
        },
        {
          title: 'Tailored Linen Blazer + Pleated Dress Trousers',
          description: 'Deconstructed single-breasted blazer in warm camel or navy, worn with crisp dress shirt and monk strap shoes.',
          fabrics: 'Irish linen, breathable wool hopsack',
          silhouette: 'Smart casual tailoring with relaxed shoulders'
        }
      ],
      party: [
        {
          title: 'Embroidered Silk Bundi Vest + Silk Kurta',
          description: 'Subtly embroidered tone-on-tone Nehru jacket worn over a mulberry silk kurta and tailored trousers.',
          fabrics: 'Art silk, tussar silk, and brass button detailing',
          silhouette: 'Festive sharpness without stiffness'
        },
        {
          title: 'Asymmetrical Draped Kurta Set',
          description: 'Modern overlapping front kurta with geometric cowl drape, paired with slim-fit Jodhpuri trousers.',
          fabrics: 'Modal silk or fluid viscose crepe',
          silhouette: 'High-fashion contemporary Indian silhouette'
        },
        {
          title: 'Velvet Evening Blazer + Dark Trousers',
          description: 'Deep jewel-toned velvet blazer (emerald or wine) with satin lapels, worn over a tailored black dress shirt.',
          fabrics: 'Plush velvet with silk satin trims',
          silhouette: 'Commanding evening presence'
        }
      ],
      ethnic: [
        {
          title: 'Heritage Silk Kurta-Pajama with Stole',
          description: 'Classic knee-length silk kurta in rich jewel or warm earth tone, paired with comfortable churidar or straight pajama and woven stole.',
          fabrics: 'Mulberry silk, muga silk, or handwoven Chanderi',
          silhouette: 'Traditional timeless cut ensuring comfort'
        },
        {
          title: 'Regal Structured Sherwani with Churidar',
          description: 'Intricately embroidered sherwani with metallic button accents, paired with churidar and handcrafted mojari footwear.',
          fabrics: 'Brocade, raw silk, and hand zardozi work',
          silhouette: 'Statuesque ceremonial posture'
        },
        {
          title: 'Pathani Kurta-Salwar Set with Epaulettes',
          description: 'Collared Pathani kurta with flap pockets and rolled sleeves, paired with voluminous, breathable salwar trousers.',
          fabrics: 'Sturdy cotton twill, linen, or spun viscose',
          silhouette: 'Relaxed, confident drape offering all-day ease'
        },
        {
          title: 'Printed Handloom Kurta with Linen Nehru Jacket',
          description: 'Kalamkari or Ajrakh block-printed kurta paired with a neutral linen waistcoat and tan Kolhapuri chappals.',
          fabrics: 'Vegetable-dyed natural cotton and raw linen',
          silhouette: 'Artisanal festive charm with effortless movement'
        }
      ]
    },

    androgynous: {
      casual: [
        {
          title: 'Breezy Unisex Khadi Tunic + Wide-Leg Trousers',
          description: 'Drop-shoulder boxy tunic with deep side pockets, paired with pleated wide-leg linen trousers and minimalist slip-ons.',
          fabrics: 'Handspun organic khadi and unbleached cotton',
          silhouette: 'Relaxed, fluid silhouette with neutral proportions'
        },
        {
          title: 'Oversized Button-down + Cropped Trousers',
          description: 'Crisp oversized poplin shirt in your palette ivory or sage, half-tucked into high-rise cropped trousers.',
          fabrics: 'Crisp poplin, bamboo viscose, or structured linen',
          silhouette: 'Clean geometric drape with effortless attitude'
        },
        {
          title: 'Minimalist Co-ord Loungewear Set',
          description: 'Mandarin collar boxy shirt with matching straight-cut drawstring trousers in earthy olive or terracotta.',
          fabrics: 'Washed waffle cotton or soft tencel',
          silhouette: 'Comfort-first, unisex tailored drape'
        }
      ],
      formal: [
        {
          title: 'Modern Draped Angrakha Vest + Tailored Trousers',
          description: 'Asymmetric wrap waistcoat over a sleek monochrome mock-neck top, paired with sharp pleated trousers.',
          fabrics: 'Structured suiting wool blend or heavy linen',
          silhouette: 'Sculptural lines that honor individual expression'
        },
        {
          title: 'Deconstructed Bandhgala Jacket + Wide Culottes',
          description: 'Collarless or stand-collar structured jacket without harsh waist tapering, paired with fluid wide-leg bottoms.',
          fabrics: 'Matte raw silk, suiting twill, and horn buttons',
          silhouette: 'Poised, architectural gender-neutral tailoring'
        },
        {
          title: 'Monochromatic Double-Breasted Suit',
          description: 'Relaxed-fit double-breasted blazer worn over a fluid modal shirt with matching straight trousers in deep navy or berry.',
          fabrics: 'Breathable tropical wool or linen-silk blend',
          silhouette: 'Effortless relaxed tailoring with clean drape'
        }
      ],
      party: [
        {
          title: 'Metallic Brocade Open Duster + Silk Trousers',
          description: 'Floor-length open front brocade cape/duster worn over a minimal neutral inner and tapered silk pants.',
          fabrics: 'Banarasi brocade with viscose lining and raw silk',
          silhouette: 'Dramatic flowing movement with royal presence'
        },
        {
          title: 'Asymmetrical Draped Cowl Kurta + Cigarette Pants',
          description: 'Sculptural cowl-neck tunic in jewel tones with clean metallic cuffs, paired with structured cigarette trousers.',
          fabrics: 'Modal silk, satin georgette, and organza accents',
          silhouette: 'Fluid artistic drape that moves like water'
        },
        {
          title: 'Structured Nehru Trench Vest + Tailored Jumpsuit',
          description: 'Longline sleeveless vest with Nehru collar worn over a minimalist tailored one-piece suit.',
          fabrics: 'Crepe de Chine and structured cotton gabardine',
          silhouette: 'Clean, bold, and modern'
        }
      ],
      ethnic: [
        {
          title: 'Contemporary Layered Handloom Kurta & Dhoti-Pants',
          description: 'Minimalist straight kurta paired with pre-draped dhoti trousers and an artisanal handloom stole.',
          fabrics: 'Chanderi cotton, handwoven tussar, and silk mulmul',
          silhouette: 'Dynamic draped silhouette celebrating Indian heritage'
        },
        {
          title: 'Longline Angrakha Robe over Flared Trousers',
          description: 'Flowing open-tie wrap robe inspired by royal court attire, worn over neutral inner pants and handcrafted juttis.',
          fabrics: 'Mulmul cotton with block-printed borders or raw silk',
          silhouette: 'Graceful, genderless traditional dignity'
        },
        {
          title: 'Bespoke Achkan-Inspired Long Vest + Straight Pajama',
          description: 'Straight-cut sleeveless achkan with antique brass buttons, worn over a tone-matched tunic and trousers.',
          fabrics: 'Raw silk, linen, and handspun khadi',
          silhouette: 'Statuesque vertical lines emphasizing personal posture'
        },
        {
          title: 'Handloom Saree Draped as Dhoti-Pant Fusion',
          description: 'Handwoven cotton-silk saree worn in a contemporary pant-drape style, paired with a tailored crop blazer.',
          fabrics: 'Maheshwari or Ikat cotton-silk',
          silhouette: 'Innovative fusion that merges tradition with autonomy'
        }
      ]
    }
  },

  // Hairstyle options categorized by length & styling preference
  hairstyles: {
    short: {
      feminine: [
        { title: 'Textured Pixie / French Bob', desc: 'Light feathering around cheekbones; effortless to style with a touch of hair cream.' },
        { title: 'Chin-Length Blunt Bob', desc: 'Clean, architectural edge that frames jawline and showcases statement earrings.' },
        { title: 'Soft Layered Crop', desc: 'Gentle crown volume with wispy front pieces that soften facial angles.' }
      ],
      masculine: [
        { title: 'Textured Crop / Quiff', desc: 'Subtle taper on the sides with textured length on top for versatile daily styling.' },
        { title: 'Classic Side Part Fade', desc: 'Timeless, clean-cut professional style that pairs crisply with Bandhgalas and suits.' },
        { title: 'Natural Textured Buzz / Crew', desc: 'Ultra-low maintenance cut that highlights facial bone structure.' }
      ],
      androgynous: [
        { title: 'Textured Modern Mullet / Shag', desc: 'Playful balance of short front framing with relaxed length at the nape.' },
        { title: 'Soft Architectural Crop', desc: 'Clean geometric lines with flexible textured movement at the crown.' },
        { title: 'Slicked-Back Taper', desc: 'Gender-neutral polished cut that can be styled wet or natural.' }
      ]
    },
    medium: {
      feminine: [
        { title: 'Shoulder-Length Step Cut', desc: 'Cascading layers that add bouncy movement to Indian hair textures.' },
        { title: 'Curtain Bangs with Soft Waves', desc: 'Flattering retro-inspired face framing that transitions from day to night.' },
        { title: 'Textured Lob (Long Bob)', desc: 'Versatile collarbone graze that works straight, wavy, or gathered in a half-up bun.' }
      ],
      masculine: [
        { title: 'Mid-Length Tapered Waves', desc: 'Collar-grazing natural wave with light grooming cream for effortless charm.' },
        { title: 'Classic Side-Swept Flow', desc: 'Relaxed length swept back naturally behind ears; pairs handsome with kurtas.' },
        { title: 'Textured Bro Flow', desc: 'Full-bodied relaxed mid-length with gentle crown lift.' }
      ],
      androgynous: [
        { title: 'Collarbone Wolf Cut', desc: 'Edgy shaggy layers with effortless lived-in volume and textured ends.' },
        { title: 'Blunt Center-Part Lob', desc: 'Minimalist shoulder graze with equal weight and sculptural symmetry.' },
        { title: 'Wavy Layered Bob', desc: 'Fluid movement that adapts freely to androgynous styling.' }
      ]
    },
    long: {
      feminine: [
        { title: 'Classic South Asian Braid with Gajra', desc: 'Traditional three-strand or fishtail plait accented with fresh jasmine blossoms.' },
        { title: 'Long Cascading U-Cut Layers', desc: 'Preserves hair length while removing heaviness for bouncy, glossy waves.' },
        { title: 'Romantic Textured Low Bun', desc: 'Soft tendrils framing the face, perfect for anchoring maang tikka and jhumkas.' }
      ],
      masculine: [
        { title: 'Sleek Samurai Top Knot / Man Bun', desc: 'Neat gathered bun paired with clean facial grooming or beard.' },
        { title: 'Natural Shoulder-Length Waves', desc: 'Freely flowing wavy mane with center or off-center parting.' },
        { title: 'Braided Viking / Warrior Plait', desc: 'Structured textured braid for long hair with clean hairline.' }
      ],
      androgynous: [
        { title: 'Sleek Minimalist Low Ponytail', desc: 'Center-parted slicked back pony secured at the nape; stark high-fashion aesthetic.' },
        { title: 'Fluid Untamed Waves', desc: 'Long flowing natural texture celebrating organic movement and freedom.' },
        { title: 'Braided Crown / Cornrow Rows', desc: 'Artistic braided lines offering clean face exposure with ornate finish.' }
      ]
    }
  },

  // Hair color ideas based on undertone
  hairColors: {
    warm: [
      { name: 'Warm Chestnut Brown', hex: '#523424', desc: 'Rich toasted brown with subtle golden-amber reflections that warm the skin.' },
      { name: 'Golden Caramel Balayage', hex: '#A76D3B', desc: 'Sun-dappled highlights concentrated around the face and mid-lengths.' },
      { name: 'Soft Honey Toffee', hex: '#945D36', desc: 'Sweet golden glow that enlivens olive, wheatish, and tan complexions.' },
      { name: 'Spiced Copper Auburn', hex: '#873B25', desc: 'Fiery yet soft reddish warmth that creates magnetic harmony with warm undertones.' }
    ],
    cool: [
      { name: 'Cool Ash Brown', hex: '#4B443C', desc: 'Smoky, sophisticated brown without reddish tones for a refined cool finish.' },
      { name: 'Dark Espresso Java', hex: '#2A2321', desc: 'Deep, crisp neutral-dark tone with silvery gloss and high definition.' },
      { name: 'Cool Burgundy / Wine', hex: '#5E192B', desc: 'Rich plum-infused burgundy that flatters cool olive and medium complexions.' },
      { name: 'Blue-Black Obsidian', hex: '#1C1F2B', desc: 'Dramatic high-contrast black with subtle cool midnight sheen.' }
    ],
    neutral: [
      { name: 'Chocolate Brown', hex: '#482D20', desc: 'Universally balanced rich cocoa brown with neither overt red nor ash.' },
      { name: 'Natural Dark Cocoa', hex: '#312520', desc: 'Clean, authentic dark brown that mirrors natural South Asian hair depth.' },
      { name: 'Soft Auburn Toffee', hex: '#7D4430', desc: 'Balanced blend of golden toffee and cool berry undertones.' },
      { name: 'Rich Mocha Espresso', hex: '#3B2F2F', desc: 'Smooth, polished neutral tone that works across all skin depths.' }
    ]
  },

  // Accessories: Jewelry, Bags, Footwear
  accessories: {
    jewelry: {
      warm: {
        metals: 'Yellow Gold, Antique Temple Gold, Polki, Warm Brass, and Bronze',
        description: 'Warm metals amplify your natural golden undertones. Look for 22k gold, matte temple jewelry, and amber or citrine stones.',
        staples: [
          'Antique gold jhumkas with pearl drops',
          'Intricate kundan necklace set on yellow gold foil',
          'Textured brass bangles and stackable gold rings',
          'Delicate gold chains with coin or sunburst pendants'
        ]
      },
      cool: {
        metals: '925 Silver, Oxidised Silver, White Gold, Rhodium, and Platinum-Finish',
        description: 'Cool tones glow against silvery metals. Traditional Indian oxidised silver work and diamonds create stunning contrast.',
        staples: [
          'Tribal oxidised silver chaandbalis or hasli choker',
          'Diamond or cubic zirconia tennis bracelet in white gold',
          'Silver cuff bracelets with turquoise or lapis lazuli inlays',
          'Sleek platinum-finish chains and geometric earrings'
        ]
      },
      neutral: {
        metals: 'Dual-Tone Mixed Metals, Rose Gold, Pearls, and Champagne Gold',
        description: 'You enjoy complete freedom to blend metals! Layer yellow gold with oxidised silver or wear luminous freshwater pearls.',
        staples: [
          'Dual-tone silver & gold woven kada bracelets',
          'Natural freshwater pearl necklaces and drop earrings',
          'Rose gold statement rings and watch hardware',
          'Mixed metal layered necklaces that bridge warm and cool'
        ]
      }
    },

    bags: {
      warm: [
        { type: 'Handcrafted Potli', shade: 'Raw silk potli in Marigold or Terracotta with antique gold tassels' },
        { type: 'Structured Tote', shade: 'Rich tan saddle leather or textured camel jute-canvas' },
        { type: 'Evening Clutch', shade: 'Deep olive green velvet or burnished copper box clutch' },
        { type: 'Crossbody Sling', shade: 'Warm cognac brown with brushed brass hardware' }
      ],
      cool: [
        { type: 'Handcrafted Potli', shade: 'Silver zardozi potli on royal sapphire or midnight navy velvet' },
        { type: 'Structured Tote', shade: 'Deep slate grey or jet black pebbled leather' },
        { type: 'Evening Clutch', shade: 'Oxidised silver metal minaudière or cool berry satin clutch' },
        { type: 'Crossbody Sling', shade: 'Cool pine green or chalk white with polished nickel hardware' }
      ],
      neutral: [
        { type: 'Handcrafted Potli', shade: 'Champagne gold silk potli with seed pearls and mixed zari' },
        { type: 'Structured Tote', shade: 'Warm ivory canvas with chocolate brown leather trims' },
        { type: 'Evening Clutch', shade: 'Rose gold metallic box clutch or dusty plum silk envelope' },
        { type: 'Crossbody Sling', shade: 'Deep espresso or forest teal leather with muted hardware' }
      ]
    },

    footwear: {
      neutrals: [
        'Tan leather slip-on loafers / ballet flats',
        'Warm ivory pointed-toe mules',
        'Deep espresso block heels or dress oxfords',
        'Nude beige strappy sandals tailored to your skin depth'
      ],
      accents: [
        'Emerald green velvet mules for festive evenings',
        'Terracotta suede loafers or ankle boots',
        'Cobalt blue slip-on pumps with metallic heel accent',
        'Rich berry wine d’Orsay flats'
      ],
      traditional: [
        'Handcrafted Punjabi Juttis with thread and dabka embroidery',
        'Authentic Kolhapuri chappals in braided natural leather',
        'Zari-embroidered Mojaris with padded insoles for wedding celebrations',
        'Peshawari sandals with cushioned soles for effortless comfort'
      ]
    }
  }
};

if (typeof window !== 'undefined') {
  window.STYLE_DATA = STYLE_DATA;
}

export default STYLE_DATA;
