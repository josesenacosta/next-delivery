export type getTenantResponse = {
  name: string,
  mainColor: string,
  secondColor: string
}

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case 'next-delivery':
        return {
          name: 'NextDelivery',
          mainColor: '#FB9400',
          secondColor: '#FFF9F2'
        }
      break;
      case 'art-burger':
        return {
          name: 'ArtBurger',
          mainColor: '#9139BA',
          secondColor: '#F0E3F6'
        }
      break;
      default: return false
    }
  }
})