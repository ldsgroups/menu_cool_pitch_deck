import { Slide } from '@/types/types';
import {
  Slide1Introduction,
  Slide2Context,
  Slide3Problem,
  Slide4Solution,
  Slide5MarketPotential,
  Slide6Competition,
  Slide7BusinessModel,
  Slide8MarketStrategy,
  Slide9Traction,
  Slide10Team,
  Slide11Funding,
  Slide12Future,
  Slide13Screenshots,
} from '@/components';

export const slides: Slide[] = [
  { id: 1, title: "Introduction", component: Slide1Introduction },
  { id: 2, title: "Contexte", component: Slide2Context },
  { id: 3, title: "Problème", component: Slide3Problem },
  { id: 4, title: "Solution", component: Slide4Solution },
  { id: 5, title: "Potentiel de Marché", component: Slide5MarketPotential },
  { id: 6, title: "Concurrence", component: Slide6Competition },
  { id: 7, title: "Modèle économique", component: Slide7BusinessModel },
  { id: 8, title: "Stratégie de marché", component: Slide8MarketStrategy },
  { id: 9, title: "Traction", component: Slide9Traction },
  { id: 10, title: "Équipe", component: Slide10Team },
  { id: 11, title: "Demande de financement", component: Slide11Funding },
  { id: 12, title: "Futur", component: Slide12Future },
  { id: 13, title: "Aperçu de l'Application", component: Slide13Screenshots },
];
