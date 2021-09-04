export default function Content(props) {

    const {children} = props;

    return(
        <main className="w-full p-20">
            {children}
        </main>
    )
}