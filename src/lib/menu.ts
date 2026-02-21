export type MenuItem = {
  id: string;
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
  notes?: string;
};

export const lunchMenu: MenuCategory[] = [
  {
    category: 'Soups',
    items: [
      { id: 'west-bloomfield-onion', name: 'West Bloomfield onion', price: '8', description: 'French onion soup with a twist!' },
      { id: 'roasted-ratatouille', name: 'Roasted Ratatouille', price: '7', description: 'roasted vegetable soup' },
      { id: 'soup-du-jour', name: 'Soup Du jour', price: '7', description: "Depends on chef's inspiration" },
    ],
  },
  {
    category: "Hors D'oeuvres",
    items: [
      { id: 'crispy-smelt', name: 'Crispy Smelt', price: '16', description: 'with basque remoulade sauce' },
      { id: 'haricot-vert-and-escargot-almondine', name: 'Haricot vert and escargot almondine', price: '15', description: "In Beurre Maître d'Hôtel and parmigiano-reggiano" },
      { id: 'fried-artichokes', name: 'Fried Artichokes', price: '17', description: 'peruvian teardrop peppers, arugula, lemon aioli' },
      { id: 'mussels-provencal-pomme-frites', name: 'Mussels Provencal & Pomme Frites', price: '19', description: 'steamed mussels, white wine tomato sauce, fresh herbs, saffron garlic aoili' },
    ],
  },
  {
    category: 'Classic Sandwiches',
    notes: 'All sandwiches come with housemade chips, add $2 for pomme frites, $2 for sweet pomme frites, or $3 for truffle fries',
    items: [
      { id: 'beef-wellington-sandwich', name: 'Beef Wellington', price: '19', description: 'beef tips, prosciutto di parma, arugula, mushroom duxelles, balsamic, toasted baguette' },
      { id: 'grilled-chicken-brie', name: 'Grilled Chicken Brie', price: '15', description: 'fig jam, arugula, grilled ciabatta' },
      { id: 'aris-burger', name: "Ari's Burger", price: '16', description: '8oz beef patty, gruyere cheese, grilled mushrooms, lettuce, tomatoes, toasted brioche' },
      { id: 'tuna-pan-bagnat', name: 'Tuna Pan Bagnat', price: '16', description: 'tuna salad, tomatoes, arugula, hard boiled egg, nicoise olive aoili, baguette' },
      { id: 'turkey-croque-monsieur', name: 'Turkey Croque Monsieur', price: '15', description: 'roasted turkey, gruyere cheese, bechamel sauce, grilled brioche' },
      { id: 'grilled-salmon-sandwich', name: 'Grilled Salmon sandwich', price: '16', description: 'field greens, tomatoes, mustard sauce, ciabatta' },
    ],
  },
  {
    category: 'Salads',
    notes: 'Add chicken 7, salmon 9, shrimp 8, beef tips 15',
    items: [
      { id: 'tomato-burrata-caprese', name: 'Tomato and burrata caprese', price: '17', description: "fresh basil, arbequina olive oil, d'Espelette, fleur de sel, balsamic glaze" },
      { id: 'classic-caesar', name: 'Classic caesar', price: '15' },
      { id: 'half-caesar', name: 'Half caesar', price: '8' },
      { id: 'roasted-butternut-shrimp-couscous', name: 'Roasted Butternut, grilled shrimp and couscous', price: '20', description: 'field greens, grape tomatoes, french cut beans, nicoise olives, feta, house vinaigrette' },
      { id: 'michigan-bistro-salad', name: 'Michigan Bistro', price: '14', description: 'crumbled blue, dried cherries, toasted pecans, red onion, grape tomatoes, cucumbers, field greens, creamy balsamic vinaigrette' },
      { id: 'tuna-nicoise-salad', name: 'Tuna Nicoise Salad', price: '18', description: 'scoop of tuna salad, green beans, roasted potatoes, roma tomatoes, hard boiled egg, nicoise olives, on the bed of romaine lettuce, house vinaigrette' },
    ],
  },
  {
    category: 'Sides',
    items: [
      { id: 'roasted-cauliflower', name: 'Roasted cauliflower', price: '8', description: 'with Parmigiano-Reggiano and truffle oil' },
      { id: 'grilled-asparagus', name: 'Grilled asparagus', price: '7', description: 'with Parmigiano-Reggiano and truffle oil' },
      { id: 'sweet-pomme-frites', name: 'Sweet Pomme Frites', price: '7' },
      { id: 'truffle-pomme-frites', name: 'Truffle Pomme Frites', price: '8', description: 'House cut truffle pomme frites with parmesan cheese' },
      { id: 'pomme-frites', name: 'Pomme Frites', price: '7' },
      { id: 'house-salad', name: 'House Salad', price: '6' },
      { id: 'extra-bread-basket', name: 'Extra bread basket', price: '2', description: '4 pieces' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { id: 'apple-pecan-strudel', name: 'Apple Pecan Strudel (Fri and Sat only)', price: '11', description: 'A la mode' },
      { id: 'creme-brulee', name: 'Crème brûlée', price: '10', description: 'Traditional French dessert' },
      { id: 'rays-ice-cream', name: "Ray's ice cream", price: '7' },
      { id: 'pecan-framboise-moelleux-cake', name: 'Pecan framboise moelleux cake', price: '12', description: 'Belgian dark chocolate with raspberry sauce and brandied cherries, a la mode' },
      { id: 'basque-burnt-cheesecake', name: 'Basque burnt cheesecake', price: '10' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { id: 'harney-sons-tea', name: 'Harney and sons sachet tea', price: '5', description: 'Variety of delicous teas' },
      { id: 'sparkling-water', name: 'Sparkling water', price: '3+', description: 'Badoit, Pellegrino, or Perrier. Small $3, Large $5' },
    ],
  },
];

export const dinnerMenu: MenuCategory[] = [
  {
    category: "Hors D'oeuvres",
    items: [
      { id: 'dinner-fried-artichokes', name: 'Fried Artichokes', price: '17', description: 'peruvian teardrop peppers, arugula, lemon aioli' },
      { id: 'dinner-tomato-burrata-caprese', name: 'Tomato and burrata caprese', price: '17', description: "fresh basil, arbequina olive oil, d'Espelette, fleur de sel, balsamic glaze" },
      { id: 'dinner-wild-mushroom-duxelles-crostini', name: 'Wild Mushroom Duxelles crostini', price: '16', description: 'goat cheese, microgreens, balsamic glaze' },
      { id: 'dinner-crispy-smelt', name: 'Crispy Smelt', price: '16', description: 'with basque remoulade sauce' },
      { id: 'dinner-haricot-vert-escargot-almondine', name: 'Haricot vert and escargot almondine', price: '15', description: "In Beurre Maître d'Hôtel and parmigiano-reggiano" },
      { id: 'dinner-scallops-st-jacques', name: 'Scallops St Jacques', price: '19', description: 'white wine poached scallop gratin, cremini mushrooms, gruyere cheese (dine in only)' },
      { id: 'dinner-mussels-provencal', name: 'Mussels Provencal', price: '18', description: 'steamed mussels, white wine tomato sauce, fresh herbs' },
    ],
  },
  {
    category: 'Soups',
    items: [
      { id: 'dinner-west-bloomfield-onion', name: 'West Bloomfield onion', price: '8', description: 'French onion soup with a twist!' },
      { id: 'dinner-roasted-ratatouille', name: 'Roasted Ratatouille', price: '7', description: 'roasted vegetable soup' },
      { id: 'dinner-soup-du-jour', name: 'Soup Du jour', price: '7', description: "Depends on chef's inspiration" },
    ],
  },
  {
    category: 'Salads',
    notes: 'Add chicken 7, salmon 9, shrimp 8, cajun beef tips 15',
    items: [
      { id: 'dinner-classic-caesar', name: 'Classic caesar', price: '15' },
      { id: 'dinner-half-caesar', name: 'Half caesar', price: '8' },
      { id: 'dinner-roasted-butternut-shrimp-couscous', name: 'Roasted Butternut, grilled shrimp and couscous', price: '20', description: 'field greens, grape tomatoes, french cut beans, nicoise olives, feta, house vinaigrette' },
      { id: 'dinner-michigan-bistro-salad', name: 'Michigan Bistro', price: '14', description: 'crumbled blue, dried cherries, toasted pecans, red onion, grape tomatoes, cucumbers, field greens, creamy balsamic vinaigrette' },
    ],
  },
  {
    category: 'Entrees',
    notes: '*Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness',
    items: [
      { id: 'dinner-boeuf-bourguignon', name: 'Boeuf Bourguignon', price: '38', description: 'beef tenderloin tips, cremini mushrooms, pearl onions, carrots, yukon gold mashed potatoes, burgundy wine' },
      { id: 'dinner-charbroiled-lamb-chops', name: 'Charbroiled Lamb Chops *', price: '50', description: 'charbroiled lamb chops, yukon gold mashed potatoes, sauteed spinach, tart cherry glace' },
      { id: 'dinner-salmon-a-la-plancha', name: 'Salmon a la plancha*', price: '30', description: 'Faroe Island salmon, everything seasoning roasted vegetable medley, fresh herb beurre blanc' },
      { id: 'dinner-canard-aux-cerises', name: 'Canard aux cerises*', price: '30', description: 'seared duck breast, sweet potato puree, sauteed spinach, goat cheese, drunken michigan tart cherries' },
      { id: 'dinner-rustic-ragu-bolognese', name: 'Rustic ragu Bolognese', price: '26', description: 'slow cooked creamy Bolognese sauce over pappardelle pasta' },
      { id: 'dinner-truffle-saffron-risotto', name: 'Truffle Saffron Risotto', price: '24', description: 'roasted acorn, mushrooms, onions, sun dried tomatoes, spinach, truffle oil' },
      { id: 'dinner-grilled-walleye', name: 'Grilled Walleye', price: '32', description: 'cracker meal crusted fillet, grilled asparagus, roasted red skin potatoes, whole grain beurre blanc' },
      { id: 'dinner-steak-au-poivre', name: 'Steak au Poivre*', price: '50', description: 'pepper crusted 8 oz Australian grass fed fillet, grilled asparagus, sweet pomme frites, peppercorn sauce' },
    ],
  },
  {
    category: 'Accompagnements',
    items: [
      { id: 'dinner-truffle-pomme-frites', name: 'Truffle Pomme Frites', price: '8', description: 'House cut truffle pomme frites with parmesan cheese' },
      { id: 'dinner-sweet-pomme-frites', name: 'Sweet Pomme Frites', price: '7' },
      { id: 'dinner-pomme-frites', name: 'Pomme Frites', price: '7' },
      { id: 'dinner-roasted-cauliflower', name: 'Roasted cauliflower', price: '8', description: 'with Parmigiano-Reggiano and truffle oil' },
      { id: 'dinner-grilled-asparagus', name: 'Grilled asparagus', price: '7', description: 'with Parmigiano-Reggiano and truffle oil' },
      { id: 'dinner-house-salad', name: 'House Salad', price: '6' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { id: 'dinner-basque-burnt-cheesecake', name: 'Basque burnt cheesecake', price: '10' },
      { id: 'dinner-creme-brulee', name: 'Crème brûlée', price: '10', description: 'Traditional French dessert' },
      { id: 'dinner-pecan-framboise-moelleux-cake', name: 'Pecan framboise moelleux cake', price: '12', description: 'Belgian dark chocolate with raspberry sauce and brandied cherries, a la mode' },
      { id: 'dinner-apple-pecan-strudel', name: 'Apple Pecan Strudel (Fri and Sat only)', price: '11', description: 'A la mode' },
      { id: 'dinner-rays-ice-cream', name: "Ray's ice cream", price: '7' },
    ],
  },
];
