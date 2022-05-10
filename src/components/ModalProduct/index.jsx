import {ContainerProduct, Modal, ButtonModal, ButtonRegister} from './style'

import { useContext } from 'react'
import { ModalContext } from '../../Providers/modal'

function ModalProduct () {

    const {setProduct} = useContext(ModalContext)

    return (
        <ContainerProduct>
            <Modal>
                <section>
                    <h3>ADICIONAR NOVO PRODUTO</h3>
                    <ButtonModal onClick={() => setProduct(false)}>X</ButtonModal>
                </section>
                <input type="text" placeholder='Nome' />
                <input type="number" placeholder='Preço'/>
                <select name="" id="">
                    <option>Bedidas</option>
                    <option>Comidas</option>
                    <option>Drinks</option>
                    <option>Sobremesas</option>
                </select>
                <ButtonRegister>Cadastrar</ButtonRegister>
            </Modal>
        </ContainerProduct>
    )
}

export default ModalProduct