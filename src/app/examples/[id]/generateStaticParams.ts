// Server component file for static params generation

const examples = {
  'open-source': {},
  'cryptocurrency': {},
  'social-media': {},
  'file-sharing': {}
};

export function generateStaticParams() {
  return Object.keys(examples).map(id => ({ id }));
} 