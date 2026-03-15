
import React from 'react';
import Book from './Book';
import { Star, ListChecks, Image as LucideImage, BookOpen, FileCheck2, Sparkles } from 'lucide-react';

const bookData = {
  title: 'Community Medicine, 2ed. | Exam Made Easy (PB 2026)',
  isbn: '9788198953889',
  authors: 'Shubha DB, Sandhya Rani J, Vidya GS, Shalini H, Anurupa MS',
  publisher: 'CBS Publishers & Distributors Pvt Ltd',
  edition: '2nd Edition | 29 October 2025',
  dimensions: '27.8 x 21 x 1.5 cm',
  pages: '320',
  description:
    'This is the thoroughly revised and updated edition of the book which is designed to be an indispensable resource for both success in the examination and a thorough understanding of community medicine subject. The book provides a deep foundation that extends well beyond the classroom.',
  salientFeatures: [
    { icon: <Star color="#ff9800" size={20} style={{ marginRight: 8 }} />, text: 'Comprehensive exam-focused approach' },
    { icon: <ListChecks color="#ff9800" size={20} style={{ marginRight: 8 }} />, text: 'Competency-based question organization' },
    { icon: <LucideImage color="#ff9800" size={20} style={{ marginRight: 8 }} />, text: 'Updated explanations with visual aids' },
    { icon: <BookOpen color="#ff9800" size={20} style={{ marginRight: 8 }} />, text: 'High-yield points for quick revision' },
    { icon: <FileCheck2 color="#ff9800" size={20} style={{ marginRight: 8 }} />, text: 'Real examination practice with past university question papers' },
    { icon: <Sparkles color="#ff9800" size={20} style={{ marginRight: 8 }} />, text: 'Refined content with enhanced precision' },
  ],
  images: [
    '/Book/Community Medicine 2ed/71cqTZLMBFL._SL1500_.jpg',
    '/Book/Community Medicine 2ed/71DZBxinniL._SL1500_.jpg',
    '/Book/Community Medicine 2ed/71TLMoegj1L._SL1500_.jpg',
    '/Book/Community Medicine 2ed/71tta0RZEPL._SL1500_.jpg',
    '/Book/Community Medicine 2ed/71ZUNPPvUTL._SL1500_.jpg',
    '/Book/Community Medicine 2ed/81H3yvjUEeL._SL1500_.jpg',
    '/Book/Community Medicine 2ed/81NPISScNXL._SL1500_.jpg',
    '/Book/Community Medicine 2ed/81wlhWly-eL._SL1500_.jpg',
  ],
  stores: [
    {
      name: 'Amazon',
      url: 'https://www.amazon.in/Community-Medicine-2ed-Exam-Made/dp/B0FY61N2C4/ref=asc_df_B0FY61N2C4?mcid=3c28bedfbeba3b7baa456cece3184350&tag=googleshopdes-21&linkCode=df0&hvadid=710047280844&hvpos=&hvnetw=g&hvrand=5101454777109590159&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9075333&hvtargid=pla-2522461252517&psc=1&gad_source=1',
      logo: '/stores/3840px-Amazon_icon.svg.png',
      bg: '#ff9900',
      hoverBg: '#e68900',
    },
    {
      name: 'Medioks',
      url: 'https://medioks.com/singleproduct/Community-Medicine-Exam-Made-Easy/enpoQ2FlYXpuMTZxS3RLUjBMbFBFQT09?gad_source=1&gad_campaignid=22921757519&gbraid=0AAAAACmQVjgQyArEtvGoWbJV-TEAUZ8vo&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdDe6k7z593Eqz8ckeHq0-wJQjlZbVTEvuBMYZORCa_brmXzEsN01ahoCe9IQAvD_BwE',
      logo: '/stores/Medioks_id8q7bPrjy_0.png',
      bg: '#0a7e8c',
      hoverBg: '#086b76',
    },
    {
      name: 'Flipkart',
      url: 'https://www.flipkart.com/community-medicine-2ed-exam-made-easy-pb-2026/p/itm47444c35b13df?pid=9788198953889&lid=LSTBOK9788198953889B2PEGS&marketplace=FLIPKART&cmpid=content_book_23283927061_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,784823595533,,,,c,,,,,,,&entryMethod=23283927061&&cmpid=content_23283927061_gmc_pla&gad_source=1&gad_campaignid=23283927061&gbraid=0AAAAADxRY59NpKUwAzqAqF9L6sUBjOP-s&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdBQGS1W34CghBQK7jUUDTyptQksI12dJBKHGcT7o1XFFsJZTL1i4qxoCEhYQAvD_BwE',
      logo: '/stores/flipkart-icon.png',
      bg: '#2874f0',
      hoverBg: '#1d5bbf',
    },
    {
      name: 'CBSPD',
      url: 'https://www.cbspd.com/product/Community-Medicine--Exam-Made-Easy-?srsltid=AfmBOop-qMl4oKw7KFxPeeFnchJ5tebaX94YdUTDVA7KIJCR-wpGga2F',
      logo: '/stores/cbspd.png',
      bg: '#1b1b1b',
      hoverBg: '#333',
    },
  ],
};

const BookOrder: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FCD8CD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0',
        fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      }}
    >
      <Book book={bookData} />
    </div>
  );
};

export default BookOrder;
