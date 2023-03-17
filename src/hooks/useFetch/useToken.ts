
const useToken = async () => {

    const auth = localStorage.getItem('token');
    if (auth) return;
    try {
        const resp = await fetch(
            'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
        );
        if (!resp.ok) {
            throw new Error(`${resp.status} server error`);
        }
        const token = await resp.json();
        // console.log('token', token)
        localStorage.setItem('token', JSON.stringify(token.token));
    } catch (er) {
        console.log(er)
    }
};
export { useToken };