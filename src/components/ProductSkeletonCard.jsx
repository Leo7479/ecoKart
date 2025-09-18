
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const ProductSkeletonCard = ()=>{
    return(
        <div>
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          {/* Image skeleton */}
          <div className="w-full h-[200px] rounded-lg overflow-hidden mb-2">
            <Skeleton height="100%" />
          </div>

          {/* Title */}
          <Skeleton width={200} height={20} className="mb-2" />

          {/* Prices */}
          <div className="flex gap-2 mb-2">
            <Skeleton width={60} height={18} />
            <Skeleton width={40} height={18} />
            <Skeleton width={50} height={18} />
          </div>

          {/* Rating */}
          <Skeleton width={100} height={18} className="mb-2" />

          {/* Shipping */}
          <Skeleton width={120} height={18} className="mb-4" />

          {/* Buttons */}
          <div className="flex justify-between w-full gap-2">
            <Skeleton width={120} height={40} />
            <Skeleton width={120} height={40} />
          </div>
        </SkeletonTheme>
        </div>
    );
}

export default ProductSkeletonCard;