import Link from 'next/link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Colors from '@/app/ui/ProductCard/Colors';
import Price from '@/app/ui/ProductCard/Price';
import {
  StyledIconButton,
  StyledIconFavoriteButton,
  Title,
  StyledCardContent,
} from '@/app/ui/ProductCard/ProductCardStyles';

const ProductCard = ({ id, img, name, colors, price, oldprice }) => {
  return (
    <Card sx={{ maxWidth: 300, border: 'none', boxShadow: 'none' }}>
      <Link href="/category/product_id">
        <CardMedia
          component="img"
          alt="name"
          image="https://images.prom.ua/4434624546_miskij-elektrovelosiped-paola.jpg"
          sx={{ marginBottom: '16px', borderRadius: '28px' }}
        />
        <Title component="div">
          Міський електровелосипед Paola 500W 10 A/h
        </Title>
      </Link>
      <StyledCardContent>
        <Colors colors={colors} />
        <Price price={920} oldprice={828} fontSize={22} />
        <StyledIconButton>
          <ShoppingCartIcon sx={{ width: '24px', height: '24px' }} />
        </StyledIconButton>
        <StyledIconFavoriteButton>
          <FavoriteIcon sx={{ width: '24px', height: '24px' }} />
        </StyledIconFavoriteButton>
      </StyledCardContent>
    </Card>
  );
};

export default ProductCard;
