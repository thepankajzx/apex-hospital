export interface HealthGuideline {
  id: string;
  category: string;
  badge: string;
  iconName: string;
  shortDesc: string;
  foodsToInclude: { name: string; detail: string; serving: string }[];
  foodsToLimit: { name: string; reason: string }[];
  wellnessTips: string[];
  warningSigns: string[];
  medicalDisclaimer: string;
}

export const healthGuidelines: HealthGuideline[] = [
  {
    id: 'diabetes-management',
    category: 'Diabetes / Blood Sugar Management',
    badge: 'Endocrine & Metabolic Care',
    iconName: 'Activity',
    shortDesc: 'Doctor-reviewed dietary strategies to stabilize glycemic index and improve insulin sensitivity.',
    foodsToInclude: [
      { name: 'Non-Starchy Vegetables', detail: 'Spinach, broccoli, methi, cucumber, and bitter gourd (karela).', serving: 'Generous portions, at least 2 cups daily' },
      { name: 'Whole Grains & Millets', detail: 'Barley (jowar), ragi, oats, and brown basmati rice in monitored portions.', serving: '1 small katori per meal' },
      { name: 'Legumes & Pulses', detail: 'Moong dal, chickpeas (chana), and lentils rich in complex fiber.', serving: '1 cup cooked with meals' },
      { name: 'Raw Unsalted Nuts', detail: 'Almonds and walnuts providing healthy monounsaturated fats.', serving: '4–5 soaked almonds daily' }
    ],
    foodsToLimit: [
      { name: 'Refined Flours & Sweets', reason: 'Maida, mithai, bakery items cause rapid post-prandial blood sugar spikes.' },
      { name: 'Sweetened Beverages', reason: 'Packaged fruit juices, sodas, and sweetened tea/coffee provide liquid fructose with zero fiber.' },
      { name: 'Deep-Fried Snacks', reason: 'Trans-fats interfere with insulin receptor uptake.' }
    ],
    wellnessTips: [
      'Take a brisk 15-minute post-meal walk to activate GLUT-4 glucose transporters without medication adjustments.',
      'Maintain fixed meal timings to avoid hypoglycemic or hyperglycemic swings.',
      'Check HbA1c every 3 months and keep fasting glucose logs handy for your physician.'
    ],
    warningSigns: [
      'Fasting blood sugar consistently above 180 mg/dL or below 70 mg/dL.',
      'Sudden blurred vision, excessive thirst, unhealing foot sores, or dizziness.',
      'Ketone breath or unexplained rapid weight loss.'
    ],
    medicalDisclaimer: 'Portion sizes and glycemic responses must be personalized. Never alter, reduce, or discontinue prescribed diabetes medications or insulin based on dietary habits without consulting your physician.'
  },
  {
    id: 'hypertension',
    category: 'High Blood Pressure',
    badge: 'Cardiovascular Health',
    iconName: 'Heart',
    shortDesc: 'Evidence-based DASH nutritional approaches to promote arterial elasticity and healthy BP.',
    foodsToInclude: [
      { name: 'Potassium-Rich Produce', detail: 'Bananas, sweet potatoes, tomatoes, and tender coconut water in moderation.', serving: '1–2 servings daily (check if no renal disease)' },
      { name: 'Leafy Greens & Beetroot', detail: 'Naturally contains dietary nitrates that convert into nitric oxide for vasodilation.', serving: 'Daily salad or steamed bowl' },
      { name: 'Low-Fat Dairy', detail: 'Fresh unflavoured curd (dahi) or skim milk providing bioavailable calcium.', serving: '1 katori fresh curd daily' },
      { name: 'Flaxseeds & Chia', detail: 'Rich in alpha-linolenic acid (ALA) for vascular wellness.', serving: '1 tablespoon ground seeds daily' }
    ],
    foodsToLimit: [
      { name: 'High-Sodium Pickles & Papad', reason: 'Preserved achaar and papads contain excessive salt, expanding intravascular volume.' },
      { name: 'Processed Meats & Canned Foods', reason: 'High hidden sodium preservatives trigger acute arterial pressure spikes.' },
      { name: 'Excess Caffeine & Alcohol', reason: 'Temporarily constricts blood vessels and impairs autonomic BP regulation.' }
    ],
    wellnessTips: [
      'Aim for less than 1 teaspoon (5 grams) of total dietary salt per day across all meals.',
      'Practice 10 minutes of slow diaphragmatic breathing (pranayama) morning and evening.',
      'Monitor blood pressure at the same time each morning while resting comfortably.'
    ],
    warningSigns: [
      'Systolic blood pressure exceeding 160 mmHg or diastolic exceeding 100 mmHg.',
      'Sudden severe headache, blurred vision, nosebleed, or chest tightness.',
      'Shortness of breath upon lying flat.'
    ],
    medicalDisclaimer: 'Dietary sodium reduction complements but does not replace antihypertensive pharmacotherapy. Consult your cardiologist before consuming high-potassium salt substitutes.'
  },
  {
    id: 'heart-health',
    category: 'Heart Health',
    badge: 'Cardiac Wellness',
    iconName: 'ShieldCheck',
    shortDesc: 'Lipid-protective choices designed to reduce LDL oxidation and promote coronary artery health.',
    foodsToInclude: [
      { name: 'Soluble Fiber (Oats & Psyllium)', detail: 'Beta-glucan binds to bile acids in the intestine, reducing circulating LDL.', serving: '1 bowl cooked porridge daily' },
      { name: 'Heart-Healthy Cold Pressed Oils', detail: 'Mustard oil, olive oil, or groundnut oil used in moderate, measured quantities.', serving: 'Max 3–4 teaspoons per person daily' },
      { name: 'Garlic & Onions', detail: 'Allicin compounds support healthy endothelial function and mild platelet balance.', serving: '1–2 fresh crushed cloves in cooking' },
      { name: 'Colorful Berries & Citrus', detail: 'Flavonoids and vitamin C that protect vascular endothelium from free radicals.', serving: '1 small seasonal fruit portion' }
    ],
    foodsToLimit: [
      { name: 'Trans-Fat & Reheated Cooking Oils', reason: 'Commercial bakery fats (vanaspati) drastically elevate atherogenic small-dense LDL.' },
      { name: 'Processed Red Meats', reason: 'High saturated fat and heme-iron accelerate plaque formation.' },
      { name: 'Refined Sugar Overload', reason: 'Elevates circulating triglycerides and provokes systemic endothelial inflammation.' }
    ],
    wellnessTips: [
      'Engage in 150 minutes of moderate aerobic activity (brisk walking, cycling) weekly.',
      'Get your annual lipid profile, ECG, and TMT checkup if aged 35 or above.',
      'Maintain an ideal waist-to-hip ratio and prioritize 7–8 hours of sound sleep.'
    ],
    warningSigns: [
      'Pressure, squeezing, or pain in the center of the chest radiating to left arm, neck, or jaw.',
      'Unexplained shortness of breath on mild exertion.',
      'Cold sweats, lightheadedness, or sudden rapid irregular palpitations.'
    ],
    medicalDisclaimer: 'Heart disease symptoms require immediate professional cardiac evaluation. Never ignore chest discomfort; proceed directly to Apex Hospital 24/7 Emergency if pain occurs.'
  },
  {
    id: 'digestive-health',
    category: 'Digestive Health',
    badge: 'Gastroenterology',
    iconName: 'Sparkles',
    shortDesc: 'Gentle, gut-friendly guidance to prevent acid reflux, bloating, and irregular bowel habits.',
    foodsToInclude: [
      { name: 'Probiotic Curd & Buttermilk (Chaas)', detail: 'Live lactic acid bacteria restore gut flora balance and soothe mucous membranes.', serving: '1 glass fresh chaas with roasted jeera' },
      { name: 'Soothing Stewed Vegetables', detail: 'Bottle gourd (lauki), zucchini, pumpkin (kaddu), and boiled carrots.', serving: 'Easy to digest dinner base' },
      { name: 'Papaya & Stewed Apples', detail: 'Natural papain and pectin enzymes aid protein digestion and smooth motility.', serving: '1 bowl mid-morning' },
      { name: 'Hydrating Warm Water & Ginger Infusion', detail: 'Stimulates bile flow and soothes gastric spasms naturally.', serving: 'Sipped 30 mins after meals' }
    ],
    foodsToLimit: [
      { name: 'Excess Chili & Heavy Garam Masala', reason: 'Irritates esophageal sphincter and provokes acute hyperacidity and gastritis.' },
      { name: 'Carbonated Drinks & Sodas', reason: 'Introduces excess gastric gas and increases reflux pressure.' },
      { name: 'Late-Night Heavy Meals', reason: 'Eating heavy meals within 2 hours of bedtime prevents stomach emptying.' }
    ],
    wellnessTips: [
      'Chew every bite thoroughly and maintain an upright posture for at least 45 minutes after eating.',
      'Drink 2 to 2.5 liters of clean water spread evenly throughout the day, avoiding large gulps during meals.',
      'Avoid continuous self-medication with OTC antacids without identifying underlying causes.'
    ],
    warningSigns: [
      'Difficulty or pain when swallowing food (dysphagia).',
      'Persistent vomiting, dark tarry stools, or sudden unexplained anemia.',
      'Severe abdominal pain that awakens you from sleep.'
    ],
    medicalDisclaimer: 'Persistent digestive issues, chronic acidity, or abdominal pain require clinical evaluation. Endoscopy and ultrasound are available at Apex Hospital for accurate diagnosis.'
  },
  {
    id: 'persistent-cough',
    category: 'Persistent Cough',
    badge: 'Pulmonary & ENT Care',
    iconName: 'AlertCircle',
    shortDesc: 'Supportive airway comfort guidelines while identifying when respiratory infection needs clinical treatment.',
    foodsToInclude: [
      { name: 'Warm Herbal Decoction (Tulsi & Ginger)', detail: 'Natural soothing aromatics that relieve throat irritation and pharyngeal dryness.', serving: '1 cup lukewarm, twice daily' },
      { name: 'Clear Vegetable & Bone Broths', detail: 'Provides hydration, electrolytes, and warmth to loosen sticky secretions.', serving: '1 warm bowl before bedtime' },
      { name: 'Raw Honey with Black Pepper', detail: 'Coats inflamed pharynx (do not give honey to infants under 12 months).', serving: 'Half teaspoon before sleep' },
      { name: 'Steamed Soft Foods', detail: 'Khichdi, clear soups, and mashed vegetables that do not provoke swallowing cough.', serving: 'Warm, small frequent meals' }
    ],
    foodsToLimit: [
      { name: 'Chilled Water & Ice Creams', reason: 'Cold temperatures trigger reflex bronchospasm and thicken pharyngeal mucus in sensitive individuals.' },
      { name: 'Dry Crunchy & Powdery Snacks', reason: 'Crisps and dry biscuits irritate the hypersensitive cough reflex.' },
      { name: 'Excess Dairy if Phlegm-Prone', reason: 'Can impart a temporary sensation of thickened saliva in some patients.' }
    ],
    wellnessTips: [
      'Inhale plain steam twice daily for 5–7 minutes to moisturize lower bronchial airways.',
      'Elevate the head of your bed with an extra pillow to prevent nocturnal post-nasal drip cough.',
      'Avoid secondhand cigarette smoke, cooking fumes, and cold mountain drafts in Solan.'
    ],
    warningSigns: [
      'Cough lasting more than 2 to 3 weeks without improvement.',
      'Coughing up blood or rust-colored sputum.',
      'Fever above 101°F, wheezing, shortness of breath, or chest wall pain while coughing.'
    ],
    medicalDisclaimer: 'A chronic cough must never be ignored as it can indicate bronchitis, asthma, tuberculosis, or pneumonia. Consult our chest specialist and obtain a digital chest X-ray at Apex Hospital.'
  },
  {
    id: 'immunity-nutrition',
    category: 'General Immunity & Nutrition',
    badge: 'Preventive Nutrition',
    iconName: 'Shield',
    shortDesc: 'Micronutrient-rich whole foods to support cellular defense, wound healing, and daily vitality.',
    foodsToInclude: [
      { name: 'Amla (Indian Gooseberry) & Citrus', detail: 'Exceptionally dense bioavailable vitamin C that stimulates white blood cell function.', serving: '1 fresh amla or orange daily' },
      { name: 'Turmeric with Black Pepper in Warm Milk', detail: 'Curcumin combined with piperine offers gentle anti-inflammatory support.', serving: '1 small cup before bedtime' },
      { name: 'Sprouted Moong & Kala Chana', detail: 'Sprouting activates plant enzymes, increasing bioavailable zinc and folate.', serving: 'Half katori in morning salad' },
      { name: 'Pumpkin & Sunflower Seeds', detail: 'Rich source of zinc and selenium required for antibody synthesis.', serving: '1 tablespoon mixed seeds daily' }
    ],
    foodsToLimit: [
      { name: 'Ultra-Processed Packaged Foods', reason: 'Industrial emulsifiers and excessive preservatives disrupt beneficial microbiome flora.' },
      { name: 'High Refined Sugar Foods', reason: 'Acute glucose spikes temporarily depress neutrophil phagocytic activity.' },
      { name: 'Excess Alcohol', reason: 'Depletes systemic antioxidants and impairs respiratory mucosal immunity.' }
    ],
    wellnessTips: [
      'Spend 15–20 minutes in morning sunlight to maintain baseline Vitamin D3 synthesis.',
      'Ensure 7–8 hours of consistent, uninterrupted sleep—critical for cytokine release.',
      'Practice regular hand hygiene before meals and after visiting public spaces.'
    ],
    warningSigns: [
      'Recurrent infections, frequent slow-healing skin abrasions, or persistent low-grade fever.',
      'Severe generalized chronic fatigue, mouth ulcers, or unexplained swollen lymph nodes.'
    ],
    medicalDisclaimer: 'No food confers instant immunity against acute pathogens. Balanced nutrition builds systemic resilience alongside verified clinical vaccinations.'
  },
  {
    id: 'weight-management',
    category: 'Weight Management',
    badge: 'Metabolic & Lifestyle',
    iconName: 'TrendingUp',
    shortDesc: 'Sustainable, non-crash dietary principles focused on satiety, thermogenesis, and lean muscle preservation.',
    foodsToInclude: [
      { name: 'High-Satiety Plant Proteins', detail: 'Paneer in moderation, sprouted beans, soya chunks, and dal with intact husk.', serving: 'Include protein source in all 3 meals' },
      { name: 'High-Volume Cruciferous Greens', detail: 'Cabbage, cauliflower, cucumber, and leafy greens that fill the stomach on low calories.', serving: 'Fill half your plate with raw/steamed veg' },
      { name: 'Chia Seeds & Roasted Chana', detail: 'Excellent crunchy high-fiber snacks that prevent impulsive between-meal grazing.', serving: 'Handful for evening tea' },
      { name: 'Green Tea & Clear Herbal Brews', detail: 'Mild natural catechins that support metabolic rate when combined with exercise.', serving: '1–2 cups without added sugar' }
    ],
    foodsToLimit: [
      { name: 'Liquid Sugar & Fruit Shakes', reason: 'Liquid calories bypass satiety hormones like leptin, leading to overconsumption.' },
      { name: 'Hidden Bakery Margarine', reason: 'Biscuits, rusks, and puff pastries contain dense calories with near-zero nutritional density.' },
      { name: 'Refined White Rice Excess', reason: 'High glycemic load triggers rapid rebound hunger within 90 minutes.' }
    ],
    wellnessTips: [
      'Avoid extreme starvation crash diets; aim for a moderate, sustainable daily calorie deficit of 300–400 kcal.',
      'Combine strength training 3 times weekly with 8,000 to 10,000 daily steps to safeguard metabolic rate.',
      'Drink a large glass of water 15 minutes before main meals to naturally temper appetite.'
    ],
    warningSigns: [
      'Unexplained rapid weight gain or loss despite unchanged diet (can indicate thyroid or endocrine disorders).',
      'Extreme hair fall, brittle nails, menstrual irregularities, or constant dizziness.'
    ],
    medicalDisclaimer: 'Weight regulation is intimately linked to endocrine hormones. Consider getting a comprehensive thyroid and lipid profile done at Apex Hospital to identify underlying metabolic bottlenecks.'
  },
  {
    id: 'bone-joint-health',
    category: 'Bone & Joint Health',
    badge: 'Orthopedic & Rheumatology',
    iconName: 'Bone',
    shortDesc: 'Nutritional strategies to nourish synovial joint fluid, support bone mineralization, and reduce stiffness.',
    foodsToInclude: [
      { name: 'Sesame Seeds (Til) & Ragi', detail: 'Outstanding plant-based calcium sources that support bone mineral density.', serving: '1 teaspoon roasted til or ragi roti' },
      { name: 'Fatty Fish or Walnut Omega-3s', detail: 'EPA and DHA precursors that calm inflammatory joint prostaglandins.', serving: '3–4 walnuts daily or fish twice weekly' },
      { name: 'Fortified Milk, Curd & Paneer', detail: 'Supplies essential calcium and phosphorus required for osteoblast activity.', serving: '2 servings of dairy/fortified alternatives' },
      { name: 'Vitamin C Rich Guava & Oranges', detail: 'Crucial co-factor for cartilage collagen synthesis and tendon resilience.', serving: '1 seasonal fresh fruit daily' }
    ],
    foodsToLimit: [
      { name: 'High-Purine Red Meats & Organ Meats', reason: 'Break down into uric acid crystals that deposit into joint spaces, causing gout flare-ups.' },
      { name: 'Excess Phosphoric Acid Sodas', reason: 'Colas leach calcium from bones over time when consumed regularly.' },
      { name: 'High-Sodium Table Salt', reason: 'Elevated sodium excretion through urine drags essential calcium along with it.' }
    ],
    wellnessTips: [
      'Perform non-weight-bearing joint mobility exercises (swimming, stationary cycling, gentle yoga) daily.',
      'Check Vitamin D3 and Serum Calcium levels biannually, especially during Solan winters.',
      'Wear supportive orthopedic footwear with shock absorption to protect knee and lumbar joints.'
    ],
    warningSigns: [
      'Joint swelling with warmth, redness, or inability to bear weight.',
      'Morning joint stiffness lasting longer than 45 minutes.',
      'Persistent back or hip pain with fever or radiating numbness down the legs.'
    ],
    medicalDisclaimer: 'Joint degeneration and arthritis require early diagnostic imaging. Consult our orthopedic department for digital X-rays and specialized bone density assessments.'
  }
];
