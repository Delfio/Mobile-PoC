import React from 'react';
import {FlatList} from 'react-native';
import {usePedidos} from '../../../hooks/pedidos';
import TituloPagina from '../../../components/TituloPagina';
import ContainerTotal from '../../../components/ContainerTotal';
import LottieAnimation from 'lottie-react-native';
import ContainerPedidos, {
    IPedidoProps,
} from '../../../components/ContainerPedidos';
// import {Text} from 'react-native';

import {Container, TituloEmpty} from './styles';

export const Pedidos: React.FC = () => {
    const pedidos: IPedidoProps[] = [
        // {
        //     id: '1',
        //     cli_nome: 'asdf',
        //     total_pedido: 150,
        //     data_pedido: new Date(),
        // },
        // {
        //     id: '2',
        //     cli_nome: 'asdfsdf',
        //     total_pedido: 152,
        //     data_pedido: new Date(),
        // },
        // {
        //     id: '3',
        //     cli_nome: 'asdfsdf',
        //     total_pedido: 153,
        //     data_pedido: new Date(),
        // },
        // {
        //     id: '4',
        //     cli_nome: 'asdfsdf',
        //     total_pedido: 153,
        //     data_pedido: new Date(),
        // },
        // {
        //     id: '5',
        //     cli_nome: 'asdfsdf',
        //     total_pedido: 153,
        //     data_pedido: new Date(),
        // },
        // {
        //     id: '6',
        //     cli_nome: 'asdfsdf',
        //     total_pedido: 153,
        //     data_pedido: new Date(),
        // },
    ];

    const totalDePedidos = React.useMemo(() => {
        return pedidos.length;
    }, [pedidos]);

    // React.useEffect(() => {
    //     firestore
    //         .collection('pedidos')
    //         .where('user_id', '==', user.user_id)
    //         .get()
    //         .then((el) => {
    //             console.log(el.docs[0]);
    //         });
    // }, []);

    return (
        <React.Fragment>
            <TituloPagina titulo="Seus pedidos" />
            <Container>
                {pedidos.length > 0 ? (
                    <FlatList<IPedidoProps>
                        data={pedidos}
                        keyExtractor={({id}) => id}
                        ListHeaderComponent={() => (
                            <ContainerTotal total={1500} />
                        )}
                        renderItem={({item}) => (
                            <ContainerPedidos
                                cli_nome={item.cli_nome}
                                data_pedido={item.data_pedido}
                                id={item.id}
                                total_pedido={item.total_pedido}
                            />
                        )}
                    />
                ) : (
                    <React.Fragment>
                        {/* <TituloEmpty>Não há nenhum pedido atual !</TituloEmpty> */}
                        <LottieAnimation
                            resizeMode="contain"
                            hardwareAccelerationAndroid
                            autoPlay
                            loop
                            style={{
                                display: 'flex',
                            }}
                            source={require('../Notificacoes/rocket-dog.json')}
                        />
                    </React.Fragment>
                )}
            </Container>
        </React.Fragment>
    );
};

export default Pedidos;
