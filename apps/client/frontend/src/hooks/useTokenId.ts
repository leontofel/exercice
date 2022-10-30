import { token } from '../state/atom';
import jwt from 'jsonwebtoken';
import { useRecoilValue } from 'recoil';

export const useTokenId = () => {
    const tokenValue = useRecoilValue(token);
    const payload = jwt.verify(tokenValue, process.env.PRIVATEKEY || 'secret');
    let id; 
    if(typeof payload === "string") id = payload["id"];
    
    return Number(id);

}