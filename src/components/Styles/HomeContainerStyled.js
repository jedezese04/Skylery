import styled from 'styled-components'

export let HomeContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);

@media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 590px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
}
`