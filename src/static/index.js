import Carnes from '../assets/icons/carnes.svg';
import CarnesSelecionado from '../assets/icons/carnes-selecionado.svg';
import Confeitaria from '../assets/icons/doces.svg';
import ConfeitariaSelecionado from '../assets/icons/doces-selecionado.svg';
import Japones from '../assets/icons/japones.svg';
import JaponesSelecionado from '../assets/icons/japones-selecionado.svg';
import Lanche from '../assets/icons/lanches.svg';
import LancheSelecionado from '../assets/icons/lanches-selecionado.svg';
import Pizza from '../assets/icons/pizza.svg';
import PizzaSelecionado from '../assets/icons/pizza-selecionado.svg';
import Porcoes from '../assets/icons/porcoes.svg';
import PorcoesSelecionado from '../assets/icons/porcoes-selecionado.svg';
import Saladas from '../assets/icons/saladas.svg';
import SaladasSelecionado from '../assets/icons/saladas-selecionado.svg';

export const FOOD_CATEGORIES = [
    {
        name: 'Lanches',
        icon: Lanche,
        selectedIcon: LancheSelecionado
    },
    {
        name: 'Pizzas',
        icon: Pizza,
        selectedIcon: PizzaSelecionado
    },
    {
        name: 'Carnes',
        icon: Carnes,
        selectedIcon: CarnesSelecionado
    },
    {
        name: 'Japonês',
        icon: Japones,
        selectedIcon: JaponesSelecionado
    },
    {
        name: 'Porções',
        icon: Porcoes,
        selectedIcon: PorcoesSelecionado
    },
    {
        name: 'Saladas',
        icon: Saladas,
        selectedIcon: SaladasSelecionado
    },
    {
        name: 'Confeitaria',
        icon: Confeitaria,
        selectedIcon: ConfeitariaSelecionado
    }
];

// Ainda faltam:
// ['Açaí/Sorvete', 'Yakisoba', 'Marmitex', 'Esfiha', 'Massas']

export const ALL_PREFERENCES = ['Carnes', 'Massas', 'Pizzas', 'Lanches', 'Porções', 'Saladas', 'Confeitaria', 'Açaí/Sorvete', 'Yakisoba', 'Marmitex', 'Esfiha', 'Japonês'];
export const ALL_ALLERGENS = ['Soja', 'Peixe', 'Ovos', 'Mariscos', 'Nozes', 'Amendoim', 'Gluten', 'Leite', 'Não contém'];