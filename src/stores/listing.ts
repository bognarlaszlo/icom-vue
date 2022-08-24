import { defineStore } from 'pinia'
import listings from '../assets/data/listings.json'

export interface Listing {
    adId: number,
    address: string,
    price: string|number,
    image: string,
    currency: string,
    uploadDate: string,
    description: string,
    status: string,
    contact: {
        email: string,
        parsedPhoneNumbers: Array<string>
    }
}

export const useListingsStore = defineStore({
    id: 'listings',
    state: () => {
        return {
            listings: [] as Array<Listing>,
            single: {} as Listing,
            orderBy: 'address' as keyof Listing
        }
    },
    actions: {
        getListings() {
            this.listings = data()
        },
        changeOrder(key: keyof Listing) {
            this.orderBy = key
        },
        toggleStatus(listing: Listing) {
            listing.status = listing.status !== 'checked' ? 'checked' : 'unchecked'
            save(this.listings)
        }
    },
    getters: {
        getFavoriteList(state) {
            return state.listings
                .filter((listing: Listing) => listing.status === 'checked')
                .sort((a, b) => {
                    return a[state.orderBy] < b[state.orderBy] ? 1 : -1
                })
        },
        getSingleListing(state) {
            return (id: string) => state.listings.find(listing => listing.adId === Number(id))
        },
    },
})

const data = (): Array<Listing> => {
    const saved = localStorage.getItem('listings')

    return saved
        ? JSON.parse(saved)
        : listings.ads
            .map(PriceMiddleware)
}

const save = (listings: Array<Listing>) => {
    localStorage.setItem('listings', JSON.stringify(listings))
}

const PriceMiddleware = (listing: Listing) => {
    return {
        ...listing,
        price: new Intl.NumberFormat('hu-HU').format(Number(listing.price))
    }
}
