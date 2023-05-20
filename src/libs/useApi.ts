import { Tenant } from "@/types/Tenant";

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case 'next-delivery':
        return {
          slug: 'next-delivery',
          name: 'NextDelivery',
          mainColor: '#FB9400',
          secondColor: '#FFF9F2'
        }
      break;
      case 'art-burger':
        return {
          slug: 'art-burger',
          name: 'ArtBurger',
          mainColor: '#9139BA',
          secondColor: '#F0E3F6'
        }
      break;
      default: return false
    }
  }
})