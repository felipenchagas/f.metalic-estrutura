import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    categories: [
      { id: 'estruturas', name: 'Estruturas Metálicas Pesadas', slug: 'estruturas-metalicas' },
      { id: 'barracoes', name: 'Barracões & Galpões Industriais', slug: 'barracoes-industriais' },
      { id: 'coberturas', name: 'Coberturas & Telhados Metálicos', slug: 'coberturas-metalicas' },
      { id: 'mezaninos', name: 'Mezaninos & Passarelas', slug: 'mezaninos-metalicos' },
      { id: 'engenharia', name: 'Projetos e Engenharia Civil', slug: 'engenharia-estrutural' }
    ]
  });
}
