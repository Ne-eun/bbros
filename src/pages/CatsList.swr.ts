import useSWR from "swr"
import {fetcher} from "util/fetcher"

type Data = Array<{
	id: string
	name: string
	image: {
		id: string
		url: string
	}
}>
function CatsList(keyword: string) {
	const { data, error, mutate } = useSWR<Data>(
		keyword !== ""
			? `https://api.thecatapi.com/v1/breeds/search?q=${keyword}`
			: "https://api.thecatapi.com/v1/breeds",
		fetcher,
		{
      dedupingInterval: 5000,
      shouldRetryOnError: false,
    }
	)

	return {
		data,
		error,
		mutate,
	}
}

export default CatsList;