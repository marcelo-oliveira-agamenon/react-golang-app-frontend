import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from '@ant-design/icons';

const socialLinks = [
  {
    id: 1,
    mediaLink:
      'https://x.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fmarcelo-oliveira-agamenon',
    icon: XOutlined,
  },
  {
    id: 2,
    mediaLink:
      'https://api.whatsapp.com/send?text=https%3A%2F%2Fgithub.com%2Fmarcelo-oliveira-agamenon',
    icon: InstagramOutlined,
  },
  {
    id: 3,
    mediaLink:
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fmarcelo-oliveira-agamenon',
    icon: FacebookOutlined,
  },
];

export { socialLinks };
