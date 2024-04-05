import { useCounter, useFetch } from '../hooks'
import { Loading, Quote } from '../components';

export const PrintQuote = () => {
    const { counter, increment, decrement, reset } = useCounter();
    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { quote, author } = !!data && data[0];

    if (hasError) {
        return (<div className="alert alert-danger text-center">{hasError.toString()}</div>)
    } else {
        return isLoading ? (
            <Loading />
        ) : (
            <>
                <Quote quote={quote} author={author}/>
                <button className="btn btn-primary" onClick={() => increment()}>INCREMENTO</button>
                {counter > 1 && <button className="btn btn-success" onClick={() => decrement()}>DECREMENTO</button>}
                <button className="btn btn-secondary" onClick={() => reset()}>RESET</button>
            </>
        )
    }

}
