import { defineStore } from 'pinia'
import listings from '../assets/data/listings.json'

interface Listing {
    adId: number,
    address: string,
    price: string|number,
    image: string,
    currency: string,
    uploadDate: string,
    description: string,
    status: string,
    isFavourite?: boolean,
    contact: {
        email: string,
        parsedPhoneNumbers: Array<string>
    }
}

export const useListingsStore = defineStore({
    id: 'listings',
    state: () => {
        return {
            listings: data() as Array<Listing>,
            single: null as Listing | null
        }
    },
    getters: {
        favorites(state) {
            return state.listings.filter((listing: Listing) => listing.status === 'checked')
        }
    },
    actions: {
        getSingle(id: number) {
            this.single = this.listings.find(listing => listing.adId === id) || null
            console.log(this.single)
        },
        getStatus(listing: Listing) {
            return listing.status === 'checked' ? 'bi-star-fill' : 'bi-star'
        },
        setStatus(listing: Listing) {
            listing.status = listing.status !== 'checked' ? 'checked' : 'unchecked'
            save(this.listings)
        }
    }
})

const data = (): Array<Listing> => {
    let saved = localStorage.getItem('listings')

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
