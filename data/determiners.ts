
import { ModuleData } from '../types.ts';
import { introModule } from './modules/intro.ts';
import { articlesModule } from './infographics/articles.ts';
import { demonstrativesModule } from './infographics/demonstratives.ts';
import { possessivesModule } from './infographics/possessives.ts';
import { quantifiersModule } from './infographics/quantifiers.ts';
import { distributivesModule } from './infographics/distributives.ts';
import { interrogativesModule } from './infographics/interrogatives.ts';
import { cardinalsModule } from './infographics/cardinals.ts';
import { ordinalsModule } from './infographics/ordinals.ts';

export const DETERMINER_MODULES: ModuleData[] = [
  introModule,
  articlesModule,
  demonstrativesModule,
  possessivesModule,
  quantifiersModule,
  distributivesModule,
  interrogativesModule,
  cardinalsModule,
  ordinalsModule
];
