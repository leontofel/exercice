import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function NotFound() {
    const Style404 = styled.section`
    font-size: 3rem;
    text-align: center;
    margin-top: 10rem;
    `;

    return (
        <section>
            <motion.div
                className="container text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >

                <Style404>
                    <h1>Erro 404! Página não encontrada!</h1>
                    <Link to='/'>Volte ao início</Link>
                </Style404>

            </motion.div>
        </section>
    )
}