import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3 ">
      {/* IMAGEM */}

      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          fill
          className="rounded-lg object-cover  "
          alt="{restaurant.name}"
        />

        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-white px-2 py-[2px] ">
          <StarIcon size={12} className="fill-yellow-500 text-yellow-400" />
          <span className="text-xs font-semibold">5.0</span>
        </div>

        <Button
          size="icon"
          className="absolute right-2 top-2 h-7 w-7 rounded-full bg-muted"
        >
          <HeartIcon size={16} className="fill-white text-primary" />
        </Button>
      </div>
      {/* TEXTO */}
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>

        {/* INFORMAÇÕES DA ENTREGA */}
        <div className="flex gap-3">
          {/* CUSTO ENTREGA */}
          <div className="flex items-center gap-1">
            <BikeIcon size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>

          {/* TEMPO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <TimerIcon size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
