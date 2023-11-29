const DUMMY_BOOKS = [
  {
    id: 'b1',
    title: 'The Lost City',
    description:
      'Embark on a perilous quest to discover the fabled Lost City, rumored to hold unimaginable treasures and ancient artifacts. This epic adventure will test the limits of bravery and determination.',
    authorName: 'David Anderson',
    location: "Adventurer's Books",
    date: '2023-08-20',
    image: 'images/b2.jpg',
    isFeatured: false,
    price: '$ 20.9',
  },
  {
    id: 'b2',
    title: 'The Secret of Shadows',
    description:
      'Uncover the ancient secrets hidden within the shadows as you follow the thrilling journey of a young hero. This gripping tale of mystery and adventure will keep you hooked from start to finish.',
    authorName: 'Jessica Blackwood',
    location: 'Mystic Books',
    date: '2023-06-15',
    image: 'images/b1.jpg',
    isFeatured: true,
    price: '$ 24.99',
  },
  {
    id: 'b3',
    title: 'Realm of Dreams',
    description:
      'Enter a realm where dreams come to life and reality is forever changed. This mesmerizing tale of magic and destiny will transport you to a world beyond imagination.',
    authorName: 'Emily Davidson',
    location: 'Dreamscape Publications',
    date: '2023-07-10',
    image: 'images/b3.jpg',
    isFeatured: true,
    price: '$ 10.00',
  },
  {
    id: 'b4',
    title: 'The Haunted Manor',
    description:
      'Explore the eerie halls of a haunted manor, where ghostly apparitions and chilling secrets await. This spine-tingling story will leave you breathless with every turn of the page.',
    authorName: 'William Thompson',
    location: 'Gothic Books',
    date: '2023-09-05',
    image: 'images/b4.jpg',
    isFeatured: false,
    price: '$ 9.50',
  },
  {
    id: 'b5',
    title: 'The Forbidden Scroll',
    description:
      'Unravel the mysteries of an ancient scroll believed to hold immense power and danger. This thrilling quest for knowledge will take you on a rollercoaster of twists and turns.',
    authorName: 'Sophia Reynolds',
    location: 'Arcane Library',
    date: '2023-10-15',
    image: 'images/b5.jpg',
    isFeatured: true,
    price: '$ 5.60',
  },
];

export function getFeaturedBooks() {
  return DUMMY_BOOKS.filter((event) => event.isFeatured);
}

export function getAllBools() {
  return DUMMY_BOOKS;
}

export function getBookById(id) {
  return DUMMY_BOOKS.find((event) => event.id === id);
}

export function getFilteredBooks(nameFilter) {
  const { bookName, authorName } = nameFilter;
  let filteredBooks = DUMMY_BOOKS.filter((event) => {
    return event.title == bookName || event.authorName == authorName;
  });

  return filteredBooks;
}
