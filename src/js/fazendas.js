const slidesAtuais = {};

function alternarSlide(cardIndex, direcao) {
    const containers = document.querySelectorAll(".carrossel-container");
    if (!containers || !containers[cardIndex]) return;

    const slides = containers[cardIndex].querySelectorAll(".slide");
    if (slides.length === 0) return;

    if (slidesAtuais[cardIndex] === undefined) {
        slidesAtuais[cardIndex] = 0;
    }

    // Remove o estado ativo do slide antigo
    slides[slidesAtuais[cardIndex]].classList.remove("ativo");

    // Calcula o próximo índice
    slidesAtuais[cardIndex] += direcao;

    // Loop circular infinito do carrossel
    if (slidesAtuais[cardIndex] >= slides.length) {
        slidesAtuais[cardIndex] = 0;
    }
    if (slidesAtuais[cardIndex] < 0) {
        slidesAtuais[cardIndex] = slides.length - 1;
    }

    // Adiciona a classe ativo no novo slide
    slides[slidesAtuais[cardIndex]].classList.add("ativo");
    
    // Sincroniza a exibição manual para garantir compatibilidade com o CSS
    slides.forEach((slide, i) => {
        if (i === slidesAtuais[cardIndex]) {
            slide.style.setProperty('display', 'block', 'important');
            slide.style.setProperty('object-fit', 'contain', 'important'); 
            slide.style.setProperty('background-color', '#1a1a1a', 'important');
        } else {
            slide.style.setProperty('display', 'none', 'important');
        }
    });
}

// === VARIÁVEL GLOBAL PARA O POP-UP ACESSAR AS FAZENDAS REAIS ===
let fazendasGlobais = [];
let culturaSelecionada = "todas"; // Variável padrão para evitar erros

function renderizarOsCards() {
    const container = document.getElementById("fazendas-container");
    if (!container) return;

    // Limpa o container completamente para receber o novo filtro
    container.innerHTML = "";

    // O seu array completo com TODAS as fazendas cadastradas
    const fazendas = [
        {
            titulo: "Fazenda em Pimenta - MG",
            cidade: "pimenta",
            descricao: "1.238 hectares",
            preco: "R$ 45.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712862/pimenta1_behytq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712862/pimenta2_apuoei.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712862/pimenta3_ptflak.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712863/pimenta4_qscrz9.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712863/pimenta5_gjuvjd.jpg"],
            cultura: "soja",
            link: "fazenda-pimenta.html",
            descricaoLonga: `🌿 Fazenda à Venda – 1.238 hectares - Santo Hilário - Pimenta MG\n\n📍 Localização estratégica, com grande potencial agrícola, pecuário e turístico.\n\n🔹 Áreas produtivas:\n• 300 hectares em lavoura branca mecanizada\n• 60 hectares em eucalipto mecanizado\n• 600 hectares de pastagens sadia para pecuária\n\n🔹 Histórico e produção:\n• Já cultivada com batata, café, milho e soja\n• Área de batata anteriormente irrigada por gotejamento, mostrando alto potencial produtivo\n\n🔹 Infraestrutura completa:\n• 6 casas\n• 2 barracões\n• 3 silos trincheiras\n• 2 currais\n• Curral principal com brete\n• Casa sede confortável\n• Cercas de poste de cimento e mourão tratado\n• Aproximadamente 800 metros de margem de represa\n• Cachoeira com cerca de 100 metros – grande atrativo natural\n• Pomar formado, agregando qualidade de vida e produção diversificada\n\n🌳 278 hectares aproximadamente entre APP e reserva legal\n📐 Área total: 1.238 hectares\n\n💰 Valor de venda: R$ 45.000.000,00 (à vista)`
        },
        {
            titulo: "Sítio em Alpinópolis - MG",
            cidade: "alpinopolis",
            descricao: "13 hectares",
            preco: "R$ 1.300.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712737/alp131_hq9jvx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712737/alp132_jzjjfp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712738/alp133_jbcj6m.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712738/alp134_qa40gt.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712738/alp135_dq9vvx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712739/alp136_ysviie.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712739/alp137_srhowh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712739/alp138_rsg18q.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712739/alp139_xgplnb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712740/alp1310_ykqvki.jpg"],
            cultura: "plantio" ,
            descricaoLonga: "🌿 SÍTIO À VENDA – EXCELENTE OPORTUNIDADE EM ALPINÓPOLIS/MG 🌿\n\nR$ 1.300.000,00\n\n📍 Localização: Vargem dos Pinheiros – Alpinópolis/MG\n📐 Área total: 13 hectares\n🌱 Terra vermelha de cultura – ideal para lavouras e pastagens\n💧 Riquíssima em água, com disponibilidade natural para irrigação\n🏡 Conta com casa e barracão pequeno, prontos para uso\n🚜 Solo fértil e topografia favorável, ideal para quem busca produtividade e tranquilidade no campo\n\nExcelente opção para pequenos produtores, investidores ou para lazer.\n\nEntre em contato no (35)998195673 (Celular/Whatsapp) e agende uma visita!\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas"
        },
        {
            titulo: "Fazenda em Piumhi - MG",
            cidade: "piumhi",
            descricao: "129 hectares",
            preco: "R$ 17.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712853/pi1291_pd95ml.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712853/pi1292_a9hu8y.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712853/pi1293_v4c9ml.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712854/pi1294_dv0wgj.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712854/pi1295_yd6osi.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712854/pi1296_ldvwyq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712854/pi1297_oxdyu0.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712855/pi1298_y9qsnn.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712855/pi1299_kxmvdh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712861/pi12910_nkgabf.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌱 Fazenda à Venda – Piumhi/MG - 8 km da cidade - Sentido São Roque de Minas\n\n📐 Área total: 129 hectares\n☕ Produção em café:\n• 43 hectares de café mecanizado já em produção\n• Possibilidade de plantar mais 30 hectares, também totalmente mecanizáveis\n• Previsão de safra: 2.000 sacas de café\n\n🏡 Estrutura completa:\n• 2 casas equipadas com energia solar\n• 2 açudes\n• 2 currais montados para gado\n• 2 barracões de apoio\n\n💧 Excelente disponibilidade de água\n🚜 Topografia favorável e aptidão agrícola de alto nível\n\n💰 Valor: R$ 17.500.000,00\n\n👉 Fazenda completa, com forte vocação cafeeira e infraestrutura preparada para produção em grande escala, além de oferecer sustentabilidade e conforto." 
        },
        {
            titulo: "Fazenda em Formiga - MG",
            cidade: "formiga",
            descricao: "1.488 hectares",
            preco: "R$ 200.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712793/f14881_prmozu.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712794/f14882_zga0qo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712793/f14883_auuaz7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712793/f14884_dvmvxc.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712793/f14885_upazxw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712794/f14886_z7uww6.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712794/f14887_ge0xwo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712794/f14888_o7l1yx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712794/f14889_ieoad7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712794/f148810_nr07pp.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "🌾 Excelente Fazenda à Venda em Formiga/MG – 1.488 hectares 🌾\n\n📍 Localizada no município de Formiga/MG, esta belíssima propriedade possui 1.488 hectares de área total, com 1.100 hectares destinados à agricultura e 300 hectares de APP e reserva ambiental.\n\n🔹 Topografia plana e solo de terra vermelha, ideais para produção agrícola de alta performance.\n🔹 Altitude média de 820m\n🔹 Propriedade com infraestrutura completa, incluindo 02 galpões, curral e casa sede.\n🔹 Abundância de recursos hídricos: 25 km de margem de água e 6 nascentes (açudes), com potencial total de irrigação.\n🔹 Localizada a apenas 25 km do asfalto, com fácil acesso.\n🔹 Comporta de 3.000 a 3.500 cabeças de gado\n\n📝 Documentação regularizada:\n• Registro em cartório ✔\n• Sem pendências jurídicas ou dívidas ✔\n• Possui CAR e GEO ✔\n\n💰 Valor pedido: R$ 200.000.000,00\n🚫 Não aceita permutas\n🤝 Atualmente arrendada a terceiros com cláusula de venda\n\n✨ Destaques:\n• Grande fartura de água\n• Potencial de irrigação em 100% da área\n• Propriedade produtiva e pronta para investidores sérios\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas" 
        },
        {
            titulo: "Fazenda em Fortaleza de Minas - MG",
            cidade: "fortaleza-de-minas",
            descricao: "33 hectares",
            preco: "R$ 2.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712790/f331_qtwadd.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712791/f332_fhary4.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712791/f333_hwz15w.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712791/f334_qsgugk.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712791/f335_zjltzg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712791/f336_epcfkh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712792/f337_fvgwql.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712792/f338_woxfs1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712792/f339_hjipma.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712792/f3310_rpxmeg.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🌿 Fazenda 33 hectares à Venda em Fortaleza de Minas – Oportunidade Única! 🌿\n\nApresentamos uma excelente fazenda com 33 hectares, localizada em Fortaleza de Minas/MG, a apenas 🚗 2 km do asfalto, com fácil acesso e infraestrutura ideal para 🐄 pecuária ou ☕ cultivo de café.\n\n✅ Recursos Naturais\n💧 Abundância de água, com represa própria\n🌱 Solo fértil e excelente topografia\n⛰️ Altitude aprox. de 880m – ideal para café de qualidade\n\n✅ Infraestrutura\n🐂 Curral com madeiramento novo, pronto para uso\n🏠 Casa simples, funcional e em boas condições\n🌾 Pastagens formadas e área aproveitável para diversas culturas\n\n💼 Versatilidade\nSeja para investir em 🐄 pecuária, expandir a produção de ☕ café ou desenvolver um projeto agrícola 🌱, esta propriedade oferece tudo o que você precisa para começar a produzir imediatamente.\n\n💰 Valor: R$ 2.500.000,00\n\n📲 Para mais informações, visita técnica ou proposta comercial:\n📞 (35) 99819-5673 – WhatsApp disponível\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas"
        },
        {
            titulo: "Fazenda em Bambuí - MG",
            cidade: "bambui",
            descricao: "212 hectares",
            preco: "R$ 25.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712740/b2121_zzhh9w.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712740/b2122_hh8wrq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712740/b2123_q3kbsj.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712740/b2124_m0sqqp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712741/b2125_pmqbp4.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712741/b2126_opmaaa.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712741/b2127_xj4tj1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712741/b2128_ai0r5z.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712742/b2129_vuyhe6.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712744/b21210_gpto5d.jpg"],
            cultura: "plantio",
            descricaoLonga: "🌾 FAZENDA À VENDA – BAMBUÍ / MG 🌾\n\n📍 Localização: Município de Bambuí – MG, a apenas 4 km do asfalto\n📐 Área total: 212 hectares\n🌱 Aproveitamento: 170 hectares\n🌳 Eucalipto: 10 hectares\n🚜 160 hectares em benfeitorias e lavoura\n⛰ Altitude média: 850 metros\n🌋 Solo: Terra vermelha, de alta produtividade\n\n💧 Recurso hídrico:\n• 3 poços artesianos\n• Represa\n\n⚡ Energia: Trifásica\n\n🏡 Estruturas:\n• Casa sede\n• Casa de funcionário\n• Barracão\n• Terreiro de café\n\n☕ Histórico agrícola:\n• Já foi toda plantada em café irrigado\n• Atualmente em lavoura branca\n\n🏭 Localização privilegiada: Próxima à usina\n\n💰 Valor de venda: R$ 25.000.000,00" 
        },
        {
            titulo: "Fazenda em Bambuí - MG",
            cidade: "bambui",
            descricao: "229 hectares",
            preco: "R$ 30.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712742/b2291_m2fwnb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712742/b2292_bqutkd.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712742/b2293_g3ztdm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712743/b2294_vmdbef.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712743/b2295_bi0ljc.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712743/b2296_ytyunz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712743/b2297_wg2vk1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712744/b2298_dkocef.jpg"],
            cultura: "plantio",
            descricaoLonga: "🌾 FAZENDA À VENDA – BAMBUÍ / MG 🌾\n\n📍 Localização: Apenas 18 km da cidade de Bambuí – MG\n📐 Área total: 229 hectares\n⛰ Altitude média: 850 metros\n\nDestaques da propriedade:\n• 🚜 Área com histórico de plantio em café (já foi toda plantada)\n• 💧 3 açudes localizados no centro da fazenda\n• 💦 Outorga para irrigação\n• ⚙ Já teve pivô central instalado (estrutura pronta – pivô foi vendido)\n• 🏡 Casa sede confortável\n• 🏠 3 casas de colônia\n• 🏢 Barracão para maquinários\n• 🐄 Barracão para leite\n• 🌱 Aproveitamento agrícola: cerca de 200 hectares\n\n💰 Valor de venda: R$ 30.000.000,00\n(Entrada + 2 anos)" 
        },
        {
            titulo: "Fazenda em Cássia - MG",
            cidade: "cassia",
            descricao: "68 alqueires",
            preco: "R$ 20.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712748/ca681_mo04d8.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712748/ca682_f1gfkz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712749/ca683_utvkmi.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712749/ca684_rczxan.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712749/ca685_jxkvfz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712749/ca686_vw5bst.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712750/ca687_dwkglt.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712750/ca688_vto5yw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712750/ca689_air5so.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712752/ca6810_mgkqjg.jpg"],
            cultura: "soja",
            descricaoLonga: "🔝 Grande Oportunidade no Sul de Minas! ☑\nFazenda à venda no município de Cássia/MG!\n\nApresentamos uma excelente propriedade rural com alto potencial produtivo e localização privilegiada:\n\n🌱 Área Total: 68 alqueires\n🌾 Área Cultivada: 50 alqueires plantados com soja\n🌳 Demais áreas: APP e reserva legal\n📍 Altitude: Entre 800 e 900 metros – ideal para diversas culturas\n\n💧 Abundância de Água:\nA fazenda conta com 3 represas, possibilitando a instalação de pivôs de irrigação.\nHistórico de cultivo irrigado de café.\n\n🏠 Estrutura completa:\n\nBarracão para máquinas e implementos\n\nTerreiro de café\n\nCasa antiga (necessita reforma ou pode ser restaurada com charme rural)\n\n🚜 Localização estratégica:\n\nApenas 20 km de Cássia/MG\n\nRegião reconhecida pelo alto desempenho agrícola\n\n💰 Valor de venda: R$ 20.000.000,00 (vinte milhões de reais)\n\n📞 Não perca essa oportunidade! Entre em contato no (35)99819-5673 para mais informações ou agendar uma visita.\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas" 
        },
        {
            titulo: "Loteamento em Nova Resende - MG",
            cidade: "nova-resende",
            descricao: "6,5 alqueires",
            preco: "R$ 11.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712818/ltnr1_lmfefv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712818/ltnr2_of15sl.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712818/ltnr3_kdgltn.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712818/ltnr4_zaai4d.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712819/ltnr5_cgrilp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712819/ltnr6_pzy4ta.jpg"],
            cultura: "loteamento",
            descricaoLonga: "🏡 Área à Venda – Nova Resende/MG\n\nExcelente oportunidade de investimento!\nSão 6,5 alqueires localizados dentro da cidade, em ponto estratégico e de fácil acesso.\n\n✅ Área totalmente propícia para loteamento, perfeita para novos empreendimentos residenciais ou comerciais.\n✅ Local com grande potencial para expansão urbana e valorização.\n\n📍 Localização privilegiada: inserida no perímetro urbano de Nova Resende/MG, próximo a comércios, serviços e infraestrutura.\n\n💰 Oportunidade única para investidores e construtoras!\n\n💰Valor R$ 11.000.000,00" 
        },
        {
            titulo: "Sítio em Passos - MG",
            cidade: "passos",
            descricao: "28,7 hectares",
            preco: "R$ 3.300.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712835/p281_qfrfa7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712835/p282_kixuhy.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712835/p283_hgrxeq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712835/p284_nhqg7b.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712835/p285_nek7rk.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712836/p286_fhdshw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712836/p287_z4tv6a.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712836/p288_v8l5q4.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712836/p289_r6cejv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712846/p2810_megwni.jpg"],
            cultura: "plantio",
            descricaoLonga: "🌾 Fazenda à Venda – Região de Passos/MG 🌾\n\n📍 Localizada a apenas 3,5 km da cidade, com acesso fácil e rápido, essa propriedade é ideal para quem busca produtividade e excelente logística.\n\n📐 Área total: 28,7 hectares\n✅ Aproveitamento agrícola de aproximadamente 90%\n🌱 Excelente para lavoura branca, como soja, milho, feijão, entre outras culturas\n🌍 Solo fértil e topografia favorável à mecanização\n\nOportunidade única para quem deseja investir em uma propriedade de alto potencial produtivo, pertinho da cidade!\n💰Valor R$ 3.300.000,00\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas" 
        },
        {
            titulo: "Fazenda em Carmo do Rio Claro/Itaci - MG",
            cidade: "carmo-do-rio-claro",
            descricao: "65 hectares",
            preco: "R$ 12.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712806/i651_h09aqx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712806/i652_rcxy7q.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712806/i653_nvu2b3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712806/i654_tvfzhz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712806/i655_b4z03m.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712806/i656_h6mbb8.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712807/i657_dv93io.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712807/i658_nfuxut.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712807/i659_ytv9eg.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌾 Fazenda à Venda – Itaci/MG\n\n📐 Área total: 65 hectares\n🚜 Área de produção: 49 hectares\n💧 Irrigação: 24 hectares já irrigados, com possibilidade de irrigar o restante\n🌍 Localização: Apenas 3 km de Itaci/MG\n⛰ Altitude média: 840 metros\n❄ Livre de geadas\n💦 Ótima de água – segurança hídrica para produção o ano todo\nA lavoura tem entre 7 e 8 anos de idade\n\n💰 Valor: R$ 12.000.000,00\n\n👉 Fazenda pronta para produção, com excelente potencial produtivo e localização privilegiada." 
        },
        {
            titulo: "Fazenda em Boa Esperança - MG - Proibido Postar",
            cidade: "boa-esperanca",
            descricao: "475 hectares",
            preco: "R$ 170.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712746/be4751_s6bqom.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712747/be4752_bdtlo2.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712747/be4753_n0unio.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712747/be4754_tydfmc.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712747/be4755_vfzmiq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712748/be4756_s4pwh3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712748/be4757_lpqsbx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712748/be4758_saxftp.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌱 FAZENDA À VENDA – SUL DE MINAS GERAIS - BOA ESPERANÇA MG 🌱\n\n📍 Localização: Sul de Minas – Região tradicional e valorizada da cafeicultura.\n\nÁrea Total: 475 hectares\nÁrea em Café: 360 hectares irrigados, totalmente mecanizados\n➡ Aproximadamente 2.000.000 (dois milhões) de pés de café em plena produção\n\nEstrutura completa para cafeicultura:\n• 🚜 Máquinas e implementos agrícolas inclusos\n• 🏡 2 casas sede confortáveis\n• 🏠 Diversas casas para colonos\n• 🏢 Escritório administrativo\n• 🏚 Vários barracões de apoio e armazenamento\n• 💧 Fazenda irrigada e preparada para alta produtividade\n\n💰 Valor de venda: R$ 170.000.000,00" 
        },
        {
            titulo: "Sítio em São Pedro da União - MG",
            cidade: "sao-pedro-da-uniao",
            descricao: "20 hectares",
            preco: "R$ 3.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712873/spu101_svkdio.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712873/spu102_wu9fr0.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712873/spu103_eucc8d.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712874/spu104_bewovx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712874/spu105_hfpywf.jpg"],
            cultura: "cafe",
            descricaoLonga: "🔥 Grande Oportunidade em São Pedro da União/MG! ☕🌱\n\n📐 20 hectares produtivos\n🌳 48 mil pés de café de alta qualidade\n💧 Água em abundância – riquíssima em recursos hídricos\n📍 Apenas 2 km da cidade\n💰 R$ 3.500.000,00\n\n💼 Ideal para investimento seguro e rentável!" 
        },
        {
            titulo: "Fazenda em Passos - MG",
            cidade: "passos",
            descricao: "77 alqueires",
            preco: "R$ 13.800.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712843/p771_bowjcg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712843/p772_xvr1tt.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712843/p773_a0tt4t.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712843/p774_lokfj7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712843/p775_zbialv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712844/p776_balbit.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712844/p777_bbavbh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712844/p778_zghnnr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712844/p779_gfzueo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712849/p7710_cqonwq.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🏞 Fazenda à Venda – Região da Julieira/MG 🐄\n\nValor de pedida R$ 13.800.000,00\n\n📍 Localização privilegiada, ideal para quem busca produtividade e tranquilidade no campo!\n\n📐 77 alqueires (186,3 hectares) de área total\n🏡 Casa sede nova, com excelente padrão de construção\n👨‍🌾 Casa de caseiro\n🐮 Barracão para gado e curral estruturado\n💧 Fazenda muito rica em água, com diversas nascentes dentro da propriedade\n🌱 Indicada para pecuária leiteira ou de corte\n\nPropriedade completa, com infraestrutura pronta para quem deseja investir no agronegócio com segurança e retorno!\n\n📞 Para mais informações, entre em contato agora mesmo! (35)99819-5673 (WhatsApp)\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas" 
        },
        {
            titulo: "Sítio em Passos/Alpinópolis - MG",
            cidade: "passos",
            descricao: "4 alqueires",
            preco: "R$ 1.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712849/pa41_kqzmub.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712850/pa42_g9wpii.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712850/pa43_yl7zm3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712850/pa44_fvrbsf.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712850/pa45_lmlzln.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712851/pa46_tnpvk0.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712851/pa47_j9mqkq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712851/pa48_esxv2m.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712851/pa49_uvpkal.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712851/pa410_fwyrto.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌱 Sítio à Venda – Região de Passos/MG / Alpinópolis\n\n📍 Localizado a apenas 26 km de Passos/MG e 16 km de Alpinópolis\n\n✅ Área Total: 4 alqueires\n🌳 Café em Produção: 15 mil pés plantados, com possibilidade de expansão\n📦 Expectativa de Produção: 200 sacas previstas para 2026\n🏠 Estrutura: Casa simples, chiqueiro e poço artesiano\n⛰ Altitude Média: 1.100 metros – ideal para o cultivo de cafés especiais\n🚗 Acesso fácil e ótima localização\n\n💰 Valor R$ 1.500.000,00" 
        },
        {
            titulo: "Fazenda em São João Batista do Glória - MG",
            cidade: "sao-joao-batista-do-gloria",
            descricao: "75 hectares",
            preco: "R$ 9.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712866/sjbg1_qj4wwv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712866/sjbg2_epmya5.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712867/sjbg3_x0b9ud.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712867/sjbg4_bqn55n.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712867/sjbg5_hs3pce.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712867/sjbg6_tz6bvg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712867/sjbg7_fjmofr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712868/sjbg8_fczevf.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712868/sjbg9_cxr6y3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712868/sjbg10_srk9ra.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "✅ Grande oportunidade 🔝\n\n☑️ Belíssima Fazenda à Venda! 🌿\n\n📐 Área: 75 hectares\n🌱 Aproveitamento: 80% produtivos | 20% APP\n📏 Topografia: 100% plana e totalmente mecanizada 🚜\n🌾 Vocação: Excelente para lavoura branca, ☕ café e 🐄 pecuária (dupla aptidão)\n💧 Água: Muito bem servida, margeada por rio 🌊\n⛰️ Altitude: 780m\n\n🏡 Benfeitorias\n\n🏠 Casa sede (precisa de reforma)\n\n🛖 Barracão para ordenha (precisa de reforma)\n\n📍 Localização\n\nApenas 12 km de São João Batista do Glória 📌\n\nRegião das Palmeiras 🌴\n\n❌ Não aceita arrendamento | ✔️ Somente venda\n\n💰 R$ 8.400.000,00" 
        },
        {
            titulo: "5 Chácaras em Nova Resende - MG",
            cidade: "nova-resende",
            descricao: "600m² cada",
            preco: "R$ 800.000,00 as 5 chácaras",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712766/chnr1_wgqccg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712767/chnr2_mblh3w.jpg"],
            cultura: "terreno",
            descricaoLonga: "🌳 CHÁCARAS À VENDA EM NOVA RESENDE – MG 🌳\n\n🏡 São 5 chácaras exclusivas com 600m² cada, perfeitas para lazer, moradia ou investimento seguro.\n📍 Localização privilegiada em Nova Resende – MG\n💰 Ótima oportunidade de investimento!\n\n✔ Espaço ideal para construir sua casa de campo\n✔ Tranquilidade e contato direto com a natureza\n✔ Excelente valorização na região\n\n🔑 Garanta já a sua\n\n💰 💰 R$ 800.000,00 (as 5 chácaras)\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas" 
        },
        {
            titulo: "Fazenda em Jaíba - MG",
            cidade: "jaiba",
            descricao: "960 hectares",
            preco: "R$ 12.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712814/jaiba1_gztpzx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712814/jaiba2_fvyd05.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712814/jaiba3_oxut0o.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712815/jaiba4_ilji5j.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712815/jaiba5_l1jsjg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712815/jaiba6_xisymx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712815/jaiba7_rhc9ff.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712815/jaiba8_m3uetl.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712816/jaiba9_jvzjfk.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "🌾 FAZENDA À VENDA – JAÍBA/MG 🌾\n\n📐 Área: 960 hectares – 800 hectares para Dupla Aptidão 🐂🌱\n📏 Topografia: 100% plana e toda cercada 🚜\n🌧 Índice Pluviométrico: 1.100 mm/ano\n⛰ Altitude: 500 m\n\n📍 Localização: 35 km de Jaíba | 70 km de Janaúba | 150 km de Montes Claros\n\n💰 Valor: R$ 12.000.000,00\n🏠 Aceita imóveis como parte do pagamento 🔄" 
        },
        {
            titulo: "Sítio em Carmo do Rio Claro - MG",
            cidade: "carmo-do-rio-claro",
            descricao: "10 alqueires",
            preco: "R$ 1.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712773/crc101_hqbx39.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712773/crc102_oxtucz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712773/crc103_q3dmvt.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712774/crc104_thttex.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712774/crc105_fgvz7e.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712774/crc106_yp5nrv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712774/crc107_ydm5wl.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712774/crc108_t6glpz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712775/crc109_z2ukxt.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "🌿 Sítio à Venda – Excelente Localização e Estrutura Completa 🌿\n\nApresentamos uma excelente oportunidade de investimento:\n🏡 Sítio com 24,2 hectares (10 alqueires), situado a apenas 14 km de Carmo, com acesso 🚗 em ótimas condições.\n📍 Bairro: Buracão\n\nA propriedade conta com:\n✨ 🛏️ Casa principal com 5 dormitórios (sendo 1 suíte)\n✨ 🏠 Casa de caseiro, oferecendo suporte à administração\n✨ ☕ Terreiro de café, ideal para produção e beneficiamento\n✨ 💧 Duas represas + nascente dentro da propriedade, garantindo segurança hídrica\n\n💼 Valor de venda: R$ 1.000.000,00\n\n📑 Documentação em ordem.\n📲 Para mais informações ou agendamento de visita, estamos à disposição!\n\n#wdfazendas 🌾\n#fazendas 🌱\n#agronegocio 🚜\n#agroetudo 🌿\n#antigasfazendas 🐄" 
        },
        {
            titulo: "Fazenda em Conceição Aparecida - MG",
            cidade: "conceicao-aparecida",
            descricao: "145 hectares",
            preco: "R$ 21.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712750/ca1451_qmaopq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712750/ca1452_yrhzrz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712751/ca1453_oi6phm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712751/ca1454_sjyqns.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712751/ca1455_p3nvkp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712752/ca1456_wvhdes.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712752/ca1457_jitjxv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712752/ca1458_qsbiep.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712752/ca1459_mmkwao.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712753/ca14510_ko3o1v.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌱 FAZENDA PRODUTIVA À VENDA – EXCELENTE OPORTUNIDADE AGRÍCOLA EM CONCEIÇÃO APARECIDA/MG 🌿\n\nApresentamos uma fazenda de alto padrão, ideal para investidores e produtores que buscam produtividade, estrutura e localização estratégica.\nCom excelente aproveitamento agrícola, essa propriedade está pronta para operar com múltiplas culturas e oferecer retorno imediato.\n\n📍 Localização Privilegiada\n• Situada em Conceição Aparecida/MG\n• Fica a 3 km do trevo de Conceição Aparecida, indo do Carmo para Aparecida\n• Apenas 2 km de estrada de terra – acesso fácil e ótima logística\n\n📐 Área Total: 145 hectares\n• 54 hectares com café em plena produção – 221 mil pés plantados\n• 48 hectares de lavoura branca\n• 38 hectares com eucalipto e pastagens\n• 5 hectares de mata ciliar preservada\n• Solo de terra de cultura – fértil e de alta produtividade\n• Rio corta a propriedade – abundância hídrica durante todo o ano\n\n⚙️ Infraestrutura Completa\n• Energia trifásica\n• Casa sede ampla, moderna e confortável\n• Topografia favorável para mecanização total da lavoura\n\n✅ Diferenciais da Propriedade:\n• Diversificação produtiva: café, grãos, eucalipto e pecuária\n• Pronta para operação imediata\n• Alto potencial de retorno agrícola\n\n📞 Agende sua visita:\nEntre em contato pelo número (35) 99819-5673 (Celular/WhatsApp) e conheça de perto essa grande oportunidade no agronegócio.\n\n💰 Valor: R$ 21.000.000,00\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas"
        },
        {
            titulo: "Fazenda em São Sebastião do Paraíso/Jacuí - MG",
            cidade: "paraiso",
            descricao: "37 alqueires",
            preco: "R$ 10.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712876/ssp371_h9oqbr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712876/ssp372_wukh67.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712876/ssp373_gocz8r.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712877/ssp374_vy1ymz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712877/ssp375_aja3o1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712877/ssp376_crhkug.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712877/ssp377_iif7pf.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712877/ssp378_ifku3o.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712878/ssp379_zkewsh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712878/ssp3710_nvfhj9.jpg"],
            cultura: "plantio",
            descricaoLonga: "Fazenda à Venda – Região de São Sebastião do Paraíso / Jacuí – MG\n\nFazenda de 37 alqueires (≈ 89 hectares) localizada em uma das melhores regiões de Minas Gerais para café, com acesso privilegiado à beira do asfalto, entre São Sebastião do Paraíso e Jacuí.\n\n🌱 Produção Agrícola\n• 25 alqueires propícios para plantio de café\n• Solo fértil e preparado para alta produtividade\n• Altitude média de 900 metros, ideal para cafés de qualidade superior\n\n💧 Recursos Hídricos\n• Propriedade riquíssima em água, com ótima disponibilidade para irrigação\n\n🏠 Infraestrutura\n• Excelente logística de acesso, a poucos minutos da cidade\n• Possui uma casa e um curral\n\n💰 Valor de Venda: R$ 10.000.000,00\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas"
        },
        {
            titulo: "Fazenda em São João Batista do Glória",
            cidade: "sao-joao-batista-do-gloria",
            descricao: "245 hectares",
            preco: "R$ 17.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712870/sjbg2451_u8losh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712871/sjbg2452_seh2rm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712871/sjbg2453_yxtjjq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712871/sjbg2454_gojxd8.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712871/sjbg2455_wgigkb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712872/sjbg2456_zldk7q.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712872/sjbg2457_uom63y.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712872/sjbg2458_kul1xj.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712872/sjbg2459_wii4dn.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712873/sjbg24510_saj4sq.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "🌿✈ FAZENDA DE ALTO PADRÃO À VENDA – SÃO JOÃO BATISTA DO GLÓRIA/MG ✈🌿\nLuxo, produtividade e natureza em uma só propriedade!\n\n📍 Localização estratégica:\n• Apenas 2 km da MG-050\n• 6 km do Tuná Parque Aquático\n• Próxima à Barragem de Furnas\n\n📐 Área total: 245 hectares\n🌱 Área de plantio: 90 hectares com topografia privilegiada\n💧 Recursos hídricos abundantes – ideal para irrigação e produção intensiva\n⛰ Altitude média: 890m – excelente para culturas diversas e pecuária\n\n💦 Destaques naturais:\n• Cachoeira com grande volume de água dentro da propriedade\n• Lagoa ideal para pesca e lazer\n\n🐄 Estrutura agropecuária completa:\n• Área para pecuária de corte ou leiteira\n• Curral funcional\n• Balança e marcador de gado\n\n🏡 Residência e lazer com conforto:\n• Casa sede ampla e aconchegante\n• Área gourmet integrada à área de lazer\n\n🛩 Infraestrutura aérea de alto padrão:\n• Pista de pouso asfaltada\n• Hangar para avião\n• Heliponto\n\n📌 Versatilidade incomparável:\nPerfeita para agricultura irrigada, pecuária, turismo rural ou residência de alto padrão com acesso rápido e infraestrutura única na região.\n\n💰 Valor: R$ 17.000.000,00"
        },
        {
            titulo: "Fazenda em São João Batista do Glória - MG",
            cidade: "sao-joao-batista-do-gloria",
            descricao: "98 hectares",
            preco: "R$ 5.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712868/sjbg981_vblohm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712868/sjbg982_imkhk1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712869/sjbg983_f2ixmm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712869/sjbg984_oatbbn.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712869/sjbg985_qumrmz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712869/sjbg986_kdqcq3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712870/sjbg987_s6pcwp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712870/sjbg988_bkyzcc.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712870/sjbg989_ac2qfy.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712872/sjbg9810_ha4dnm.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "🏞️ FAZENDA À VENDA – NATUREZA, PRODUTIVIDADE E BELEZA NATURAL EM SÃO JOÃO BATISTA DO GLÓRIA/MG 🌿\n\nR$ 6.500.000,00\n\nApresentamos uma excelente oportunidade de investimento rural! Fazenda localizada a apenas 12 km de São João Batista do Glória, com acesso facilitado e infraestrutura natural privilegiada.\n\n📐 Área total: 98 hectares\n🌱 35 hectares preparados para cultivo de soja\n🐄 37 hectares dedicados à pecuária\n🌳 Área restante destinada à reserva legal, preservando o ecossistema local\n\n💧 Extremamente rica em água, com múltiplas cachoeiras e nascentes naturais\n🌄 Vista deslumbrante, ideal para quem busca contato direto com a natureza ou até mesmo para turismo rural\n\nEssa propriedade une produtividade agrícola e pecuária com o melhor da beleza natural de Minas Gerais.\n\nEntre em contato no (35)998195673 (Celular/Whatsapp) para mais informações e agende uma visita!\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas"
        },
        {
            titulo: "Fazenda em Passos - MG",
            cidade: "passos",
            descricao: "86,488 hectares",
            preco: "R$ 6.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712830/p86_41_vxv6ir.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712831/p86_42_r3rvzh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712831/p86_43_gzv8oj.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712831/p86_44_brqeng.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712831/p86_45_lsyb8a.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712832/p86_46_lopo14.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712832/p86_47_sfcrba.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712832/p86_48_owdobt.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712832/p86_49_jwx5ff.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712833/p86_410_q6cyau.jpg"],
            cultura: "dupla aptidao",
            descricaoLonga: "Fazenda Produtiva – 86,488 hectares – Dupla Aptidão 🐂🌾\n\n📍 Localização privilegiada – A apenas 18 km de Passos/MG (localizada entre a estrada Julieira e Bananal)\nPossui 78 hectares de pastagens\nComporta cerca de 250 bezerros\n\n💰 Valor do Investimento: R$ 6.500.000,00\n\nUma oportunidade rara para produtores e investidores que buscam uma propriedade altamente produtiva e com infraestrutura completa. Com praticamente 100% de área aproveitável, essa fazenda une tradição e eficiência para quem deseja expandir seus negócios no agro.\n\n🌱 Potencial Agrícola e Pecuário 🐄\n✅ Dupla aptidão: ideal tanto para plantio quanto para pecuária.\n✅ Histórico de alta produtividade na cultura do café.\n✅ Excelente para integração lavoura, pecuária (ILP).\n\n💦 Recursos Hídricos Abundantes\n💧 Rica em água, com um rego d’água que corta a propriedade.\n💧 Córrego perene na parte inferior da fazenda.\n💧 Duas minas naturais, garantindo fornecimento contínuo.\n\n🏡 Infraestrutura Completa\n🏠 Sede histórica reformada, preservando a beleza e a funcionalidade da propriedade.\n🐂 Quatro currais, prontos para manejo e confinamento de gado.\n🏗 Barracão com estrutura leiteira, preparado para produção intensiva.\n\n🚀 Diferenciais Estratégicos\n📈 Altitude de 870 metros, favorecendo diversas culturas e a qualidade do pasto.\n📍 Localização privilegiada, próxima a Passos/MG, um dos polos agropecuários da região.\n📜 Documentação impecável, garantindo segurança e agilidade na negociação.\n💲 Propriedade com grande potencial de valorização, ideal para quem busca um ativo sólido e rentável no agronegócio.\n\n🔥 Essa fazenda é um investimento seguro e estratégico, reunindo produtividade, infraestrutura de ponta e recursos hídricos excepcionais. Não perca essa oportunidade! 🔥\n\n#wdfazendas\n#fazendas\n#agronegocio\n#agroetudo\n#antigasfazendas"
        },
        {
            titulo: "Sítio em Fortaleza de Minas - MG",
            cidade: "fortaleza-de-minas",
            descricao: "19 alqueires",
            preco: "R$ 1.200.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712796/fm191_lwdrio.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712797/fm192_xi8ygg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712797/fm193_dapegi.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712797/fm194_vlw7ik.jpg"] ,
            cultura: "pecuaria",
            descricaoLonga: "🏡 Sítio à venda em Fortaleza de Minas – MG\n\n🌾 Área total: 19 alqueires\n💼 Vocação: Pecuária\n\n🚜 Estrutura:\n• 1 barracão\n• Curral simples\n\n📍 Localização:\n• A 8 km da cidade\n• Apenas 5 km do asfalto\n• Altitude: 950 metros\n\n💧 Propriedade com boas condições para criação de gado e possibilidade de ampliação das instalações.\n\n💰 Valor: R$ 1.200.000,00\n\n✨ Excelente oportunidade para quem busca um sítio produtivo, com boa localização, clima agradável e ótimo potencial!\n\n#wdfazendas\n#fazendas\n#antigasfazendas\n#fazendaavenda\n#agronegócio\n#agropecuaria"
        },
        {
            titulo: "Sítio em Fortaleza de Minas - MG",
            cidade: "fortaleza-de-minas",
            descricao: "14 alqueires",
            preco: "R$ 1.100.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712795/fm141_a4vwla.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712795/fm142_lee9ed.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712795/fm143_scdzov.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712796/fm144_ffgray.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712796/fm145_wruxrd.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712796/fm146_zragm6.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712796/fm147_maaslx.jpg"] ,
            cultura: "pecuaria",
            descricaoLonga: "🏡 Sítio à venda em Fortaleza de Minas – MG\n\n🌾 Área total: 14 alqueires\n📍 Altitude: 1.000 metros\n\n☕ Atividades:\n• Plantio de café (colheita manual)\n• Pecuária\n\n🚜 Estrutura:\n• Casa simples\n• Curral\n• 1 represa\n• 1 córrego\n\n📍 Localização:\n• A 10 km da cidade\n• Fácil acesso e excelente clima de altitude\n\n💰 Valor: R$ 1.100.000,00\n\n✨ Oportunidade ideal para quem busca uma propriedade produtiva, com belas paisagens, boa disponibilidade de água e vocação agrícola e pecuária!\n\n#wdfazendas\n#fazendas\n#antigasfazendas\n#fazendaavenda\n#agronegócio\n#agropecuaria"
        },
        {
            titulo: "Sítio em Itaú de Minas - MG (Captação: Matheus)",
            cidade: "itau-de-minas",
            descricao: "14 alqueires",
            preco: "R$ 2.800.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712810/itau141_i5gi5i.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712810/itau142_kmssib.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712811/itau143_ftcxb9.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712811/itau144_fovk9i.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712811/itau145_qqh81o.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712811/itau146_v8djbq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712811/itau147_uzpsgo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712812/itau148_nla1l9.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712812/itau149_sqzppc.jpg"], 
            cultura: "pecuaria",
            descricaoLonga: "🏡 Sítio à venda em Itaú de Minas – MG\n\n📍 Localização privilegiada, a apenas 6 km do asfalto, com fácil acesso e ótima vizinhança rural.\n\n🌾 Área total: 14 alqueires\n✅ Área agricultável: 11 alqueires — terras férteis, ideais para lavoura ou pastagem.\n\n💧 Recursos hídricos:\n• Córrego na divisa\n• 1 represa\n💦 Propriedade muito boa de água, ideal para irrigação ou criação de gado.\n\n🏠 Infraestrutura:\n• Casa sede confortável\n• Barracão para gado\n• Curral funcional\n\n💰 Valor: R$ 2.800.000,00\n\n✨ Excelente oportunidade para quem busca uma propriedade produtiva, bem localizada e pronta para uso!"
        },
        {
            titulo: "Sítio em Linha das Águas - Passos - MG",
            cidade: "passos",
            descricao: "13 alqueires",
            preco: "R$ 3.250.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712833/p131_lltznz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712833/p132_ayqlx7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712833/p133_swau25.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712833/p134_cpavab.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712833/p135_a391yz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712834/p136_t5ythr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712834/p137_z8bw7v.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712834/p138_kxbnmw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712835/p139_ecl8ol.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🌿 Sítio à venda – 13 alqueires\n\nApenas 4 km de Passos (MG) - Linha das Águas 🚗\n🌾 80% a 90% de área aproveitável\n💧 Rico em água, com córrego na divisa\n🏡 Sem benfeitorias — pronto pra receber o seu projeto!\n\nPerfeito para quem busca produtividade, tranquilidade e contato com a natureza.\n\n📍 Localização privilegiada | 🌱 Alto potencial produtivo\n\nValor: R$ 3.250.000,00\n\nR$ 250.000,00 o alqueire\n\n📞 Entre em contato e agende uma visita!"
        },
        {
            titulo: "Fazenda em Guapé - MG",
            cidade: "guape",
            descricao: "82 alqueires",
            preco: "R$ 30.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712799/guape821_zixgov.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712800/guape822_bdzo7k.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712800/guape823_hdfuyg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712800/guape824_mvvwyg.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712800/guape825_ylzqbo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712800/guape826_kspzv0.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712801/guape827_nteqxq.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌱 Fazenda à Venda – Sul de Minas | Região de Guapé\n\nÁrea total: 82 alqueires\nLocalização privilegiada: apenas 3 km do asfalto, com fácil acesso.\n\n✅ Produção e Estrutura Agrícola\n• 130 hectares em café em plena produção\n• 80% da lavoura mecanizada\n• Força disponível: 35 kVA\n• Grande terreiro para secagem\n• Barracão para máquinas e insumos\n\n🏡 Benfeitorias\n• 02 casas em excelente estado para funcionários ou uso da sede\n• Estruturas bem distribuídas, facilitando o manejo da produção\n\n💧 Recursos\n• Região rica em água e tradicionalmente produtiva para café\n\n💰 Valor\n\nR$ 30.000.000,00\nProprietário faz condições de pagamento."
        },
        {
            titulo: "Fazenda em Varginha/Paraguaçu - MG - Proibido Postar",
            cidade: "paraguacu",
            descricao: "648 hectares",
            preco: "R$ 200.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712852/paraguacu6481_klhnih.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712852/paraguacu6482_xxoqug.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712852/paraguacu6483_moa8w7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712853/paraguacu6484_rlll5r.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712853/paraguacu6485_oxejvd.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712853/paraguacu6486_zay5ma.jpg"],
            cultura: "cafe",
            descricaoLonga: "FAZENDA DE CAFÉ – SUL DE MINAS - Localizada entre Varginha-MG e Paraguaçu-MG\n\nÁrea total: 648 hectares\nPedida: R$ 200.000.000,00 (duzentos milhões de reais)\n\n⸻\n\n🌱 Produção Agrícola\n• Aproximadamente 2.500.000 pés de café\n• 509,41 ha de café plantado, sendo 447 ha irrigados\n• 90,50 ha em áreas úteis (eucalipto, estruturas, represas, pastos)\n• 48,38 ha em pastos e reserva legal\n\nSafra 2025: 10 mil sacas e a previsão para 2026: 30 mil sacas\n\nProdução altamente tecnificada, com irrigação em grande escala e manejo estruturado para alta produtividade.\n\n⸻\n\n🏡 Benfeitorias\n\nMoradias\n• 08 casas de colônia\n• 03 casas tipo sede\n• 02 refeitórios (1 fixo e 1 móvel)\n\nEstrutura Administrativa\n• Escritório de 160 m²\n• Escritório adicional de 70 m²\n\n⸻\n\n☕ Estrutura para Café\n• Terreiro asfaltado de 6.000 m²\n• Terreiro asfaltado de 6.500 m²\n• Terreiro de cimento de 2.000 m²\n• 01 lavador de varreção\n• 01 lavador com despolpador\n\nBarracões e Processamento\n• Barracão de 750 m² contendo:\n• 06 secadores com silo\n• 05 tulhas\n• 01 caldeira\n• 01 máquina de benefício\n• 01 refeitório com banheiros\n• Barracão de 810 m² para máquinas e implementos\n• Barracão de 250 m² para garagem de implementos\n• Barracão de 550 m² para adubos\n\n⸻\n\n🛠 Infraestrutura Operacional\n• Oficina de 72 m² com banheiro\n• Lavador de máquinas e implementos\n• Lavador de veículos\n• Depósito de defensivos e fertilizantes (50 m²) com banheiro\n• Depósito de sucata\n• Estrutura para tanque de diesel (comodato) + área de contenção\n• Represas, áreas de apoio e estrutura completa para manejo\n\n⸻\n\n🚜 Maquinário\n\nFazenda vendida com maquinário completo, ideal para continuidade imediata das operações.\n\n⸻\n\n📍 Destaques\n• Localização estratégica no Sul de Minas, uma das regiões mais valorizadas do país para a cafeicultura.\n• Estrutura completa, planejada para grande produção, secagem, beneficiamento e gestão.\n• Ampla área irrigada, garantindo estabilidade na produção."
        },
        {
            titulo: "Fazenda em Piumhi - MG - Proibido Postar",
            cidade: "piumhi",
            descricao: "234 hectares",
            preco: "R$ 60.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712857/pi2341_g1o1ib.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712857/pi2342_eurt23.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712858/pi2343_xgksmq.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712858/pi2344_tt7fjh.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712858/pi2345_ycr6ph.png"],
            cultura: "cafe",
            descricaoLonga: "🌱☕ FAZENDA À VENDA – 234 HECTARES – PIUMHI/MG ☕🌱\n\nExcelente oportunidade para investidores e produtores rurais que buscam grande escala na cafeicultura 📈🚜. Fazenda localizada no município de Piumhi/MG, a apenas 10 km do asfalto 🛣️, com mais 4 km de estrada de terra em excelentes condições, garantindo acesso fácil o ano todo ✅.\n\n📐 Área total: 234 hectares\n🌿 Cafeicultura: aproximadamente 1.000.000 de pés de café\n⏳ Idade das lavouras: entre 2 e 5 anos, incluindo talhões novos 🌱\n💪 Lavouras muito bem cuidadas, tecnificadas e em plena produção ☕✨\n\n💧 Riquíssima em água, com diversas nascentes naturais 💦 e córrego no fundo da propriedade 🌊 — ideal para sustentabilidade, irrigação e expansão da produção.\n\n🏠 Benfeitorias:\n• 1 casa de funcionário 🏡\n• Sem estrutura de beneficiamento, permitindo implantação conforme a necessidade do comprador 🏗️⚙️\n\n📍 Localização estratégica\n🚜 Cafeicultura de alto padrão\n💧 Abundância hídrica\n📊 Excelente potencial produtivo e valorização\n\n💰 VALOR: R$ 60.000.000,00 💰"
        },
        {
            titulo: "Fazenda em Guapé - MG",
            cidade: "guape",
            descricao: "61 hectares",
            preco: "R$ 4.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712797/guape611_scgbzq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712798/guape612_cwhavv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712798/guape613_bbmmn9.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712798/guape614_vkpuak.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712798/guape615_wpwcg3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712798/guape616_qbgkzm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712799/guape617_d4rj6w.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712799/guape618_nmdatp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712799/guape619_m3y0yq.jpg"],
            cultura: "plantio",
            descricaoLonga: "🌱☕ FAZENDA À VENDA – 61 HECTARES – GUAPÉ/MG ☕🌱\n\nExcelente oportunidade para investidores e produtores rurais que buscam área com alto potencial para cafeicultura mecanizada 🚜📈. Propriedade localizada no município de Guapé/MG, região reconhecida pela aptidão agrícola e condições ideais para produção de café de qualidade.\n\n📐 Área total: 61 hectares\n🌿 Área apta para café mecanizado: 30 hectares 🚜\n💧 Possibilidade de irrigação, com 300 metros de margem para a represa, garantindo água abundante o ano todo 🌊💦\n⛰️ Altitude: 940 metros — condição ideal para cafés especiais e de alto padrão ☕✨\n\nA fazenda possui excelente topografia, favorecendo mecanização, redução de custos operacionais e maior eficiência produtiva. Propriedade com grande potencial de valorização, ideal tanto para implantação imediata da cafeicultura quanto para investimento estratégico.\n\n📍 Localização privilegiada em Guapé/MG\n🚜 Vocação para cafeicultura mecanizada\n💧 Excelente disponibilidade hídrica\n📊 Alto potencial produtivo\n\n💰 Valor: R$ 4.000.000,00 💰",
        },
        {
            titulo: "Fazenda em Cássia - MG",
            cidade: "cassia",
            descricao: "202 alqueires",
            preco: "R$ 32.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712759/cassia2021_uciltw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712760/cassia2022_kv687m.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712760/cassia2023_pk0je4.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712760/cassia2024_ecvlaf.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712761/cassia2025_v5mz0i.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712761/cassia2026_votxkb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712761/cassia2027_lyu8b5.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712761/cassia2028_ijdpc1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712761/cassia2029_x6twuo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712761/cassia20210_msuvaj.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🌾🌿 FAZENDA À VENDA – CÁSSIA/MG 🐂🐄\n\n📐 Área total: 202 alqueires\n🐃 Capacidade: até 1.000 bois\n💧 Excelente disponibilidade de água durante todo o ano\n🌊 Represas\n💦 Nascentes\n\n🏡 Benfeitorias:\n🏠 Casa sede\n🏗️ Barracão\n🔧 Curral completo\n\n📍 Localização privilegiada: apenas 6 km de Cássia/MG, com fácil acesso 🚜🛣️\n\n💰 Valor: R$ 32.000.000,00\n\n✅ Fazenda pronta para produção, ideal para pecuária de corte, recria ou investimento seguro 📈🌱",
        },
        {
            titulo: "Cachoeira em Delfinópolis - MG",
            cidade: "delfinopolis",
            descricao: "63 hectares",
            preco: "R$ 7.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712764/ch631_mmifkb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712763/ch632_gpgggj.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712764/ch633_oqucf0.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712764/ch634_alhzu2.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712764/ch635_mgnagu.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712764/ch636_khglu7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712765/ch637_sugy0k.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712765/ch638_ppjmdl.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712765/ch639_l0qpan.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712766/ch6310_lixzyp.jpg"],
            cultura: "cachoeira",
            descricaoLonga: "🌿 Oportunidade Única na Serra da Canastra! 🌿\n\nFazenda à venda com 63 hectares, localizada em uma das regiões mais belas do Brasil – Serra da Canastra, próximo ao Parque Nacional!\n\n✅ Casa sede típica de fazenda, com varanda e fogão a lenha\n✅ Barracão para armazenamento de máquinas, ferramentas e implementos\n✅ Pastagem formada, atualmente com gado\n✅ Excelente potencial para implantação de queijaria artesanal – região renomada pelo melhor queijo do mundo!\n✅ Possui 3 cachoeiras naturais deslumbrantes, ideal para turismo rural ou pousada\n✅ Vizinha à famosa Cachoeira do Parque Canastra\n\nImagine um resort ou uma pousada charmosa nesse cenário paradisíaco! ✨\n\n💰 Valor: R$ 7.500.000,00",
        },
        {
            titulo: "Fazenda em Piumhi - MG - Proibido Postar",
            cidade: "piumhi",
            descricao: "470 hectares",
            preco: "R$ 30.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712860/pi4701_dhs9nx.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712860/pi4702_o0jydt.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712861/pi4703_mgmwfx.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712861/pi4704_klgyls.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712861/pi4705_uh4ta7.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712861/pi4706_nubtaa.png"],
            cultura: "cafe",
            descricaoLonga: "FAZENDA À VENDA – PIUMHI (MG)\n\n📍 Localização: A apenas 13 km da cidade de Piumhi.\n\n🌾 Área total: 470 hectares\n\n☕ Produção:\n• 140 hectares de café em plena produção.\n• Área restante formada em pastagem, com excelente aproveitamento para expansão do plantio.\n\n🏗️ Infraestrutura:\n• 03 barracões para armazenamento e beneficiamento de produtos.\n• 03 casas de colonos.\n• 01 poço artesiano.\n\n💧 Recursos hídricos:\n• Propriedade rica em água, ideal para irrigação e ampliação da área produtiva.\n\n💰 Valor de venda: R$ 30.000.000,00",
        },
        {
            titulo: "Fazenda em Piumhi - MG - Proibido Postar",
            cidade: "piumhi",
            descricao: "420 hectares",
            preco: "R$ 50.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712859/pi4201_c2wtgh.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712859/pi4202_s9bxbq.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712859/pi4203_deaup9.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712859/pi4204_h7aygp.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712859/pi4205_r3gaql.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712860/pi4206_kzbz8b.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712860/pi4207_a5bsfb.png"],
            cultura: "cafe",
            descricaoLonga: "🌾 Fazenda de Café – Piumhi (MG)\n\nExcelente fazenda localizada no município de Piumhi, Minas Gerais, com estrutura completa para produção de café e pecuária, situada a apenas 10 km da cidade, sendo 2 km de estrada de terra.\n\n📐 Área Total: 420 hectares\n☕ Área em Café: 190 hectares em plena produção\n🐄 Área em Pastagens: restante formada para pecuária\n\n🏗️ Infraestrutura Completa:\n• 02 secadores rotativos\n• 01 máquina de benefício\n• Via úmida completa\n• Tulhas de armazenamento\n• 02 terreiros grandes\n• 01 terreiro pequeno\n• 01 terreiro suspenso\n• 01 barracão de máquinas\n• 01 barracão para produtos\n• 01 oficina\n• 01 curral\n• 01 viveiro de mudas com 550.000 mudas de café\n• Poço artesiano\n• Rica em água\n\n🏡 Residências e Lazer:\n• Casa sede com piscina e quadra esportiva\n• 08 casas de colonos\n\n📍 Localização:\n• Município de Piumhi – MG\n• Apenas 10 km da cidade (2 km de estrada de terra)\n• Região de excelente acesso e alta produtividade\n\n💰 Valor de Venda: R$ 50.000.000,00\n🤝 Aceita condições facilitadas no pagamento.",
        },
        {
            titulo: "Fazenda em Conceição Aparecida/Carmo do Rio Claro - MG - Proibido Postar",
            cidade: "conceicao-aparecida",
            descricao: "17 alqueires",
            preco: "R$ 4.200.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712769/conc171_nozlri.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712770/conc172_vdqaw3.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712770/conc173_neixi5.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712770/conc174_yrmyix.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712770/conc175_mgknda.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712771/conc176_jsvpeh.png"],
            cultura: "cafe",
            descricaoLonga: "☕🌱 FAZENDA À VENDA – 17 ALQUEIRES – CONCEIÇÃO DA APARECIDA / CARMO DO RIO CLARO – MG 🌱☕\n\nExcelente oportunidade para produtores e investidores da cafeicultura em uma das regiões mais tradicionais do Sul de Minas.\n\n📍 Localização estratégica, entre os municípios de Conceição da Aparecida e Carmo do Rio Claro/MG, com fácil acesso.\n\n🌿 Área total de 17 alqueires, com:\n\n• 50.000 pés de café já plantados\n\n• Possibilidade de expansão para mais 50.000 pés, ampliando significativamente a produção\n\n🏗️ Infraestrutura completa para o café:\n\n• Terreirão para secagem\n\n• Casa na propriedade\n\n💰 Valor: R$ 4.200.000,00\n\n👉 Propriedade pronta para produção, com excelente potencial de crescimento e valorização, ideal para quem busca rentabilidade e tradição na cafeicultura.\n\n📞 Mais informações e agendamento de visita sob consulta.",
        },
        {
            titulo: "Fazenda em Vargem Bonita - MG",
            cidade: "vargem-bonita",
            descricao: "545 alqueires",
            preco: "R$ 66.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712890/vb5451_roxzcn.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712890/vb5452_hwz6pw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712890/vb5453_eevmyd.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712891/vb5454_ancje6.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712891/vb5455_uyeugm.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712891/vb5456_nkal5n.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712891/vb5457_ksuw99.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712891/vb5458_puhpz1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712892/vb5459_zobxps.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712894/vb54510_kaks2j.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🐂🌿 FAZENDA BAÚ À VENDA – VARGEM BONITA/MG 🌿🐂\n📍 Serra da Canastra – MG\n\nExcelente oportunidade para quem busca uma fazenda completa, produtiva e muito bem localizada!\n\n✨ Destaques da propriedade:\n📐 1.320 hectares (545 alqueires) – área contínua\n🐄 Vocação para pecuária, com ótimo aproveitamento\n🌱 60 hectares de área de plantio\n💧 Riquíssima em água – grande represa + nascentes\n🏡 Estrutura completa:\n• Casa sede excelente\n• Casa de caseiros\n• Barracão para implementos\n• Curral para gado\n• Fazenda toda cercada e formada\n\n📈 Propriedade extremamente funcional, ideal para quem busca produtividade e segurança no investimento.\n\n💰 Valor: R$ 50.000,00 por hectare\n🤝 Flexibilidade na negociação – aberto a propostas\n\n📲 Entre em contato para mais informações e agende sua visita!",
        },
        {
            titulo: "Sítio em Carmo do Rio Claro - MG",
            cidade: "carmo-do-rio-claro",
            descricao: "2 hectares",
            preco: "R$ 1.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712757/carmo21_rwn1a8.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712757/carmo22_vrfxuj.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712757/carmo23_jjhwnk.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712758/carmo24_ixcdbb.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712758/carmo25_zypokj.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712758/carmo26_vxzmlp.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712758/carmo27_nrt712.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712759/carmo28_w1etd4.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712759/carmo29_ok347m.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712759/carmo210_zdpmll.png"],
            cultura: "cafe",
            descricaoLonga: "🌱☕ SÍTIO À VENDA – EXCELENTE OPORTUNIDADE ☕🌱\n\n📍 Localização privilegiada: entre Alpinópolis e Carmo do Rio Claro/MG, às margens da rodovia\n\n📐 Área total: 2 hectares\n☕ Cafeicultura:\n\n• 6.500 pés de café irrigados\n\n• Área com potencial para plantar mais 2.000 pés\n\n🏡 Benfeitorias:\n\n• Casa boa e bem estruturada\n\n☀️ Energia solar com 15 placas (projeto aprovado para até 25 placas)\n\n💧 Recursos hídricos: propriedade rica em água\n\n💰 Valor: R$ 1.000.000,00\n\n✨ Ideal para quem busca produção, sustentabilidade e fácil acesso, tudo em uma localização estratégica!",
        },
        {
            titulo: "Cachoeira em Capitólio - MG",
            cidade: "capitolio",
            descricao: "45 hectares",
            preco: "R$ 4.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712766/chcapitolio1_j9babf.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712766/chcapitolio2_e6lzkx.jpg"],
            cultura: "cachoeira",
            descricaoLonga: "🌄🌊 OPORTUNIDADE ÚNICA EM CAPITÓLIO – SERRA DA CANASTRA 🌊🌄\n\n📍 Localização privilegiada no município de Capitólio/MG, na deslumbrante região da Serra da Canastra\n\n✨ Destaques da propriedade:\n\n🌊 Em frente à Represa de Furnas\n\n🏞️ A apenas 1,5 km dos famosos Canyons de Capitólio\n\n🎢 A 3 km do Parque Aquático Tuná (em construção)\n\n📐 Área total de 45 hectares\n\n📄 Escritura regularizada\n\n💰 Valor: R$ 100.000 por hectare\n\n🔥 Ideal para investimento turístico, pousadas, loteamentos ou valorização garantida em uma das regiões que mais crescem em Minas Gerais!\n\n📲 Entre em contato para mais informações e agende uma visita!",
        },
        {
            titulo: "Fazenda em Passos - MG",
            cidade: "passos",
            descricao: "40 alqueires",
            preco: "R$ 10.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712841/p401_lu81nw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712841/p402_cg768j.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712841/p403_swrfxx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712841/p404_xzjsww.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712842/p405_ebn51o.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712842/p406_wpj7dx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712842/p407_e4tv0o.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712842/p408_ab9iok.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712842/p409_k8de9l.jpg"],
            cultura: "soja",
            descricaoLonga: "🌾🌊 FAZENDA À VENDA EM PASSOS – REGIÃO DO BANANAL 🌊🌾\nOportunidade incrível para investir, produzir ou expandir sua atividade no agronegócio!\n\n📍 Localização privilegiada: Região do Bananal – Passos/MG\n🚜 Área total: 40 alqueires paulista (96,8 hectares)\n🛣 Apenas 10 km da rodovia MG-050\n🌱 Área de plantio: 78,56 hectares no total, atualmente cultivados com soja e milho\n💦 Propriedade muito rica em água\n\n🏡 Infraestrutura completa:\n✔ Casa sede muito boa com 3 quartos (sendo 1 suíte)\n✔ Área gourmet\n✔ Piscina\n✔ Poço de peixe\n✔ Represa\n✔ Casa para caseiro\n\n💼 Condições:\n✔ Estuda permuta como parte do pagamento\n✔ Possibilidade de parcelamento\n\n🌟 Excelente oportunidade para quem busca produtividade, estrutura e valorização em uma das regiões agrícolas mais fortes do sul de Minas.\n\n💰 Valor: R$ 10.000.000,00",
        },
        {
            titulo: "Fazenda em Passos - MG",
            cidade: "passos",
            descricao: "39 alqueires",
            preco: "R$ 10.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712838/p391_msalij.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712839/p392_unanpi.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712839/p393_v9rbcu.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712839/p394_wzfxgq.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712839/p395_i9ni3h.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712840/p396_edelgy.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712840/p397_h4ced9.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712840/p398_hhes3z.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712840/p399_vvtr3y.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712849/p3910_hodiyp.png"],
            cultura: "soja",
            descricaoLonga: "Fazenda à venda – Passos/MG\n\n📐 Área: 39 alqueires (94,38 hectares)\n🌱 Uso atual: 100% plantada em soja\n🌾 Área em cultivo: 65,66 hectares de soja\n\nCaracterísticas:\n• Altitude acima de 800 metros\n• Terra preta de cultura\n• Muita água\n• Excelente aptidão agrícola, ideal também para plantio de café\n• Casarão antigo totalmente reformado\n• Adega\n• Curral de altíssima qualidade\n• Barracão para leite tipo B\n• Casa de funcionário de ótima qualidade\n• Pomar em formação\n\n📑 Situação atual:\n• Arrendada por 20 sacas de soja por hectare/ano\n\n💰 Valor: R$ 10.000.000,00\n💳 Condições: Entrada + 01 ano para pagamento",
        },
        {
            titulo: "Fazenda em Passos - MG",
            cidade: "passos",
            descricao: "162 hectares",
            preco: "R$ 34.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712845/p1621_chmv9u.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712845/p1622_f3z5m1.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712845/p1623_nkud2i.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712845/p1624_azb8qh.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712846/p1625_htfbwv.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712846/p1626_us8z9x.png", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712846/p1627_yajokf.png"],
            cultura: "soja",
            descricaoLonga: "Fazenda Marinheiro – Passos/MG\n\n📍 Localizada na Linha da Julieira, próxima à Usina Ypiranga\n📐 Área total: 162 hectares (66,7 alqueires)\n🌱 Vocação: agricultura e pecuária\n\nCaracterísticas da propriedade:\n• Área praticamente 100% plantada, distribuída entre soja e cana-de-açúcar\n• 01 pivô central, com 68 hectares irrigados\n• Aproximadamente 4 a 5 km de margem com o Rio Grande\n• Energia monofásica, com 03 transformadores instalados\n• Excelente infraestrutura, composta por:\n• 01 casa sede de alto padrão\n• 03 casas para funcionários\n• 01 barracão de leite\n• 01 barracão para implementos agrícolas\n\nFazenda completa, altamente produtiva e muito bem localizada, com operação agrícola consolidada, ideal para investidores e produtores.\n\n💰 Valor: R$ 34.000.000,00\n💬 Valor flexível, aberto a propostas.",
        },
        {
            titulo: "Sítio em Carmo do Rio Claro/Ilicínea - MG",
            cidade: "carmo-do-rio-claro",
            descricao: "27 alqueires",
            preco: "R$ 6.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712775/crc271_ibofjy.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712775/crc272_lvzeud.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712776/crc273_z6qxlo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712776/crc274_wcismn.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712776/crc275_qcp7v9.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712776/crc276_jbz0yq.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712776/crc277_xlsqqc.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712777/crc278_wbf2ug.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712777/crc279_wtimhh.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712777/crc2710_i7wb0d.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🌾🏡 FAZENDA À VENDA – SUL DE MINAS / MG 🏡🌾\n\n📍 Localização estratégica: às margens da BR-265, entre Carmo do Rio Claro e Ilicínea/MG 🚜🛣️\n\n📐 Área total: 65,6205 hectares\n🌄 Topografia: área composta, com parte em cristal\n💧 Excelente em água: poço artesiano, água de mina e nascentes 💦\n\n🏠 Benfeitorias completas:\n✔️ Casa sede confortável 🏡\n✔️ 4 casas para funcionários 👷‍♂️🏠\n✔️ Barracão para implementos 🚜\n✔️ Curral completo com tronco e balança 🐂⚖️\n\n💰 Valor: R$ 6.000.000,00\n\n✨ Propriedade ideal para pecuária, investimento ou produção rural, com ótima logística e infraestrutura pronta!",
        },
        {
            titulo: "Sítio em Jacuí - MG",
            cidade: "jacui",
            descricao: "11 alqueires",
            preco: "R$ 3.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712812/jac111_yvs2jr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712812/jac112_jhjrro.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712813/jac113_gz3zsx.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712813/jac114_iihggu.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712813/jac115_uolaqi.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712814/jac116_cpbc4k.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712814/jac117_cttww2.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌿☕ SÍTIO À VENDA – JACUÍ/MG ☕🌿\n\n📐 Área total: 11 alqueires\n☕ Cafeicultura consolidada:\n• 40.000 pés de café\n• + 4.000 a serem plantados neste ano 🌱\n\n💰 Valor: R$ 3.500.000,00\n\n📍 Excelente oportunidade para quem busca investimento produtivo e renda no campo! 🚜✨",
        },
        {
            titulo: "Sítio em Carmo do Rio Claro - MG",
            cidade: "carmo-do-rio-claro",
            descricao: "8 alqueires",
            preco: "R$ 2.800.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712865/represa1_hdtbmw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712865/represa2_oiz17g.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712865/represa3_jogaxv.jpg"],
            cultura: "plantio",
            descricaoLonga: "🌿🏡 SÍTIO À VENDA – ÓTIMA OPORTUNIDADE 🌊\n\n📐 Área total: 8 alqueires\n💧 Beira de represa – localização privilegiada\n🌱 Terra de cultura\n🚜 5 alqueires mecanizados\n☕ Ideal para plantio de café\n🐄 Formado em braquiária\n\n💰 Valor: R$ 350.000 por alqueire\n\n📞 Excelente opção para produção ou lazer!",
        },
        {
            titulo: "Sítio em Capitólio - MG",
            cidade: "capitolio",
            descricao: "20 alqueires",
            preco: "R$ 1.800.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712755/capitolio201_i0uzpi.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712755/capitolio202_dhuxui.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712755/capitolio203_qo98gr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712755/capitolio204_uaej6l.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712755/capitolio205_ilzpp4.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712756/capitolio206_y4xrmw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712756/capitolio207_nxeai0.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712756/capitolio208_h5g0qz.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712756/capitolio209_jkixrb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712756/capitolio2010_d41vvx.jpg"],
            cultura: "pecuaria",
            descricaoLonga: "🌿 FAZENDA À VENDA – REGIÃO DE CAPITÓLIO/MG 🌿\n\nUma oportunidade rara para quem busca investir com visão! Essa bela propriedade reúne o melhor da pecuária com um enorme potencial para turismo rural.\n\n📍 Localizada em Capitólio, em uma região cercada por pousadas e natureza exuberante\n\n🌱 Destaques da propriedade:\n• Área total de 20 alqueires (aprox. 48 hectares)\n• Terra com vocação para pecuária 🐄\n• Forte potencial para exploração turística 🏡✨\n• Cachoeira nos fundos da casa antiga – um diferencial único 💧🌄\n• Casa sede antiga com charme rural\n• Segunda casa mais nova, toda avarandada, ideal para moradia ou hospedagem\n\n💰 Valor: R$ 1.800.000,00\n📄 Condições de pagamento a combinar\n\n🌟 Ideal para quem deseja investir em uma propriedade versátil, com beleza natural e excelente localização!\n\n📩 Entre em contato e venha conhecer de perto essa oportunidade!",
        },
        {
            titulo: "Sítio em Itaú de Minas - MG",
            cidade: "itau-de-minas",
            descricao: "2,8 alqueires",
            preco: "R$ 1.700.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712803/i2_81_frjkil.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712803/i2_82_ubnhlo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712804/i2_83_igdcz7.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712804/i2_84_rm63df.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712804/i2_85_a9tu5t.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712805/i2_86_wq8dbb.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712805/i2_87_rejfmc.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712805/i2_88_v2gvjp.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712805/i2_89_coepwr.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712805/i2_810_dodopt.jpg"],
            cultura: "sitio",
            descricaoLonga: "🌿 SÍTIO À VENDA – ITAÚ DE MINAS/MG 🌿\n\nExcelente oportunidade para quem busca tranquilidade, lazer e contato com a natureza 🌄\n\n📍 Localizado em Itaú de Minas/MG, a apenas 4 km do asfalto\n📐 Área de 2,8 alqueires\n\n💧 Propriedade rica em água, com represa\n🏡 Casa sede toda varandada, ideal para descanso e convivência\n🍊 Pomar com grande variedade de frutas\n🔥 Cozinha externa com tradicional fogão à lenha\n🎉 Amplo salão para confraternizações e eventos\n\nUm lugar perfeito tanto para lazer quanto para investimento rural, com fácil acesso e ótima estrutura.\n\n💰 Valor: R$ 1.700.000,00",
        },
        {
            titulo: "Sítio em São Sebastião do Paraíso - MG",
            cidade: "paraiso",
            descricao: "5 alqueires",
            preco: "R$ 1.00.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712874/ssp51_ltz7ba.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712874/ssp52_gjxr0v.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712874/ssp53_dnc2m1.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712875/ssp54_vld0re.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712875/ssp55_qxnk1y.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712875/ssp56_rwxcde.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712875/ssp57_kx434c.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712876/ssp58_a6fh8c.jpg"],
            cultura: "sitio",
            descricaoLonga: "🌿 Sítio à Venda – Excelente Oportunidade Comercial e Rural! 🌿\n\n📍 Localizado estrategicamente entre as cidades de Itaú e São Sebastião do Paraíso, este sítio reúne potencial produtivo e grande visibilidade para investimentos comerciais 🚗📈\n\n📍 Destaques da propriedade:\n📐 Área total de 5 alqueires\n🛣️ 600 metros de frente para rodovia – alto fluxo e excelente visibilidade\n💧 Mina de água – recurso natural valioso para uso próprio ou exploração\n🌄 Topografia favorável\n\n💼 Potencial Comercial: A localização privilegiada abre diversas possibilidades de negócio 🏪🚜\n\n🚜 Versatilidade: Perfeito tanto para quem busca um sítio produtivo quanto para investidores que desejam montar ou expandir um negócio em ponto estratégico 📊🌱\n\n💰 Valor: R$ 1.200.000,00",
        },
        {
            titulo: "Cachoeira em São João Batista do Glória - MG",
            cidade: "sao-joao-batista-do-gloria",
            descricao: "44 hectares",
            preco: "R$ 3.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779712762/ch441_rgmouf.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712762/ch442_rwsxqv.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712762/ch443_en1yvo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712763/ch444_swol2l.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712763/ch445_ihcjck.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779712763/ch446_xqlafm.jpg"],
            cultura: "cachoeira",
            descricaoLonga: "🏞 Bela Cachoeira à Venda – Serra da Canastra 🐂🌿\n\nUma oportunidade única para investidores e amantes da natureza!\nIdeal para criação de gado, turismo ecológico e para quem busca explorar todo o potencial das belezas naturais da região.\n\n📐 Área total: 44 hectares\n🏡 Estrutura:\n\n• 1 chalé com suíte, copa, cozinha e varanda com churrasqueira\n\n• 1 casa com 3 quartos amplos, 1 banheiro, cozinha grande e garagem\n\n📍 Localização privilegiada:\nAos pés da Serra da Canastra, no município de São João Batista do Glória – a apenas 13 km da cidade.\n\n💰 Valor: R$ 3.000.000,00\n\n🌊 A propriedade conta com bela cachoeira, cenários deslumbrantes e clima de tranquilidade que só a região oferece.\n\n#antigasfazendas #serradacanastra #agropecuaria #turismoecologico #saojoaobatistadogloria #wdfazendas",
        },
        {
            titulo: "Fazenda em Itaú de Minas - MG",
            cidade: "itau-de-minas",
            descricao: "33 alqueires",
            preco: "R$ 4.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779905183/it331_hgbfn6.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905183/it332_kvaf5m.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905183/it333_jcrnce.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905183/it334_cko80q.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905184/it335_whig2v.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905184/it336_ylj2aq.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905184/it337_zn1v8f.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905184/it338_u35igi.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905184/it339_kcl4wc.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905185/it3310_nb66rc.png"],
            cultura: "pecuaria",
            descricaoLonga: "🔥 OPORTUNIDADE EM ITAÚ DE MINAS/MG 🔥\n\nFazenda com 80,89 hectares, excelente localização e grande potencial produtivo!\n\n📍 1,5 km de margem de rodovia\n🌿 Atualmente em pecuária\n💧 Duas represas\n🌱 Área para plantio de aproximadamente 8 alqueires\n🏡 Uma casa de colono\n🐂 Barracão com curral para gado\n\n💰 Valor: R$ 4.000.000,00\n\nUma propriedade completa, com ótima logística e pronta para produzir!",
        },
        {
            titulo: "Sítio em Olhos D'Água - MG",
            cidade: "olhos-dagua",
            descricao: "11,5 hectares",
            preco: "R$ 2.500.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779905332/olhosd_agua111_mukymf.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905333/olhosd_agua112_dezcqj.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905333/olhosd_agua113_aaid7x.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905333/olhosd_agua114_vqodfm.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905334/olhosd_agua115_dj5y7v.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905334/olhosd_agua116_p6b5n2.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905335/olhosd_agua117_stx3dm.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905336/olhosd_agua118_fwjvg5.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905336/olhosd_agua119_ddkqkw.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905336/olhosd_agua1110_eu3pg5.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905337/olhosd_agua1111_dysv9l.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905337/olhosd_agua1112_serwkv.png",
                        "https://res.cloudinary.com/dtgqktctl/image/upload/v1779905338/olhosd_agua1113_zepf1a.png"],
            cultura: "sitio",
            descricaoLonga: "🌿 SÍTIO À VENDA – OLHOS D’ÁGUA | DELFINÓPOLIS/MG 🌿\n\nExcelente oportunidade para quem busca tranquilidade, produtividade e contato direto com a natureza, em uma das regiões mais valorizadas da Serra da Canastra!\n\n💰 Valor: R$ 2.500.000,00\n\n📍 Localização privilegiada\n• Ao lado da Rodovia BR-464\n• Aos pés da Serra da Canastra (potencial turístico incrível)\n\n📐 Área total\n• 4,75 alqueires (aprox. 11,50 hectares)\n• 11,50 hectares mecanizáveis\n• Topografia plana e aproveitamento excelente\n\n💧 Recursos hídricos abundantes\n• Riacho dentro da propriedade\n• Córrego de excelente volume\n• 3 lagos de peixe\n• Sistema de irrigação completo (atende lavouras e piquetes)\n\n🌱 Estrutura produtiva\n• 14 piquetes irrigados (manejo rotacionado de gado)\n• 2,5 hectares de milho para silagem\n• Curral completo com sistema de ordenha\n• Tanque de resfriamento (750 litros)\n• Casa de implementos\n\n🏡 Casa sede\n• 3 dormitórios\n• Sala\n• Banheiro\n• Varanda com garagem\n\n🔒 Outros diferenciais\n• Propriedade toda cercada com arame galvanizado\n• Terra fértil, plana e pronta para produção\n• Ideal para pecuária, agricultura ou turismo rural\n\n💎 Sítio completo, produtivo e pronto para gerar renda imediata!\n\n📲 Entre em contato para mais informações ou agendamento de visita.",
        },
        {
            titulo: "Fazenda em Poços de Caldas / São Sebastião da Grama",
            cidade: "poços-de-caldas",
            descricao: "314,77 hectares",
            preco: "R$ 30.000.000,00",
            imagens: ["https://res.cloudinary.com/dtgqktctl/image/upload/v1779907547/po%C3%A7os3142_pdnewo.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779907547/po%C3%A7os3143_cyuctw.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779907547/po%C3%A7os3144_d4q2u3.jpg", 
                "https://res.cloudinary.com/dtgqktctl/image/upload/v1779907548/po%C3%A7os3145_vzdrbw.jpg"],
            cultura: "cafe",
            descricaoLonga: "🌋 Fazenda à Venda – Região de Poços de Caldas/MG e São Sebastião da Grama/SP\n\n📐 Área: 314,77 ha (130 alqueires)\n☕ Produção: 180 mil pés de café no cinturão vulcânico — café de alto valor\n🚜 Potencial: até 500 mil pés mecanizados\n🏡 Estrutura completa: casa sede, casas de funcionários, lavador, despolpador, terreiro suspenso, secador, tulhas, oficina e escritório\n📍 Localização privilegiada\n💰 Valor: R$ 30.000.000\n📞 Estuda oferta",
        }
    ];

    const culturaSelecionada = document.getElementById("filtro-cultura").value;
    const cidadeSelecionada = document.getElementById("filtro-cidade").value;

    // Filtra o array com base na cultura + cidade
    const fazendasFiltradas = fazendas.filter(f => {
        const matchCultura =
            culturaSelecionada === "todas" || f.cultura === culturaSelecionada;

        const matchCidade =
            cidadeSelecionada === "todas" || f.cidade === cidadeSelecionada;

        return matchCultura && matchCidade;
    });

    // Salva globalmente para o escutador de cliques encontrar
    fazendasGlobais = fazendasFiltradas;

    // Se não encontrar nenhuma fazenda para aquela cultura
    if (fazendasFiltradas.length === 0) {
        container.innerHTML = `<div class="text-center col-12 my-5"><h5>Nenhuma fazenda encontrada para esta cultura.</h5></div>`;
        return;
    }

    // Renderiza os cards usando o índice real do array filtrado para o carrossel não quebrar
    fazendasFiltradas.forEach((fazenda, index) => {
        let imagensHTML = "";

        fazenda.imagens.forEach((img, imgIndex) => {
            const displayStyle = imgIndex === 0 
                ? 'display: block !important; width: 100% !important; height: 100% !important; object-fit: contain !important; background-color: #1a1a1a !important;' 
                : 'display: none !important; width: 100% !important; height: 100% !important; object-fit: contain !important; background-color: #1a1a1a !important;';
                
            imagensHTML += `
                <img 
                    src="${img}" 
                    class="slide ${imgIndex === 0 ? 'ativo' : ''}"
                    style="${displayStyle}"
                    alt="${fazenda.titulo}"
                >
            `;
        });

        const card = `
            <div class="col-md-4 col-sm-6 mb-4 card-item-galeria">
                <div class="card h-100 shadow">
                    <div class="carrossel-container" data-card-index="${index}" style="background-color: #1a1a1a !important;">
                        ${imagensHTML}
                        <button class="seta anterior control-prev">&#10094;</button>
                        <button class="seta proximo control-next">&#10095;</button>
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title">${fazenda.titulo}</h5>
                            <p class="card-text">${fazenda.descricao}</p>
                            <strong>${fazenda.preco}</strong>
                        </div>
                        <div class="mt-3 text-center">
                            <button type="button" class="btn-detalhes-custom btn-abrir-desc" data-index="${index}">
                                Ver Descrição Completa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += card;
    });

    // Vincula as setas dinamicamente
    vincularCliquesCarrossel(container);
}

function vincularCliquesCarrossel(container) {
    const carrosseis = container.querySelectorAll(".carrossel-container");
    carrosseis.forEach((carrossel) => {
        const cardIndex = parseInt(carrossel.getAttribute("data-card-index"));
        
        const btnAnterior = carrossel.querySelector(".control-prev");
        const btnProximo = carrossel.querySelector(".control-next");

        if (btnAnterior) {
            const novoBtnAnterior = btnAnterior.cloneNode(true);
            btnAnterior.parentNode.replaceChild(novoBtnAnterior, btnAnterior);
            novoBtnAnterior.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                alternarSlide(cardIndex, -1);
            });
        }

        if (btnProximo) {
            const novoBtnProximo = btnProximo.cloneNode(true);
            btnProximo.parentNode.replaceChild(novoBtnProximo, btnProximo);
            novoBtnProximo.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                alternarSlide(cardIndex, 1);
            });
        }

        carrossel.style.cursor = "zoom-in";
        carrossel.addEventListener("click", (e) => {
            if (e.target.classList.contains('seta')) return;

            const todasAsImagens = carrossel.querySelectorAll("img.slide");
            let imagemAtiva = null;
            let indiceAtivo = 0;

            todasAsImagens.forEach((img, idx) => {
                if (img.style.display !== "none") {
                    imagemAtiva = img;
                    indiceAtivo = idx;
                }
            });
            
            if (imagemAtiva) {
                const listaDeUrls = Array.from(todasAsImagens).map(img => img.src);
                abrirLightbox(listaDeUrls, indiceAtivo);
            }
        });
    });
}

function inicializarFiltro() {
    document.getElementById("filtro-cultura")
        .addEventListener("change", renderizarOsCards);

    document.getElementById("filtro-cidade")
        .addEventListener("change", renderizarOsCards);
}

let imagensDoModalAtual = [];
let indiceDaFotoNoModal = 0;

function inicializarLightbox() {
    if (!document.getElementById("lightboxModal")) {
        const modalHTML = `
            <div id="lightboxModal" class="lightbox-modal" style="display: none !important; position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; background-color: rgba(0, 0, 0, 0.9) !important; z-index: 999999 !important; justify-content: center; align-items: center; user-select: none;">
                <span id="lightboxFechar" class="lightbox-fechar" style="position: absolute !important; top: 20px !important; right: 30px !important; color: #fff !important; font-size: 50px !important; font-weight: bold !important; cursor: pointer !important; z-index: 1000002 !important;">&times;</span>
                <button id="lightboxAnt" style="position: absolute !important; left: 20px !important; top: 50% !important; transform: translateY(-50%) !important; background: rgba(0,0,0,0.5) !important; color: white !important; border: none !important; font-size: 40px !important; padding: 10px 20px !important; cursor: pointer !important; z-index: 1000002 !important; border-radius: 5px !important;">&#10094;</button>
                <img id="lightboxImg" class="lightbox-conteudo" style="max-width: 85% !important; max-height: 85% !important; object-fit: contain !important; border: 2px solid #fff !important; background-color: #000 !important; z-index: 1000001 !important;">
                <button id="lightboxProx" style="position: absolute !important; right: 20px !important; top: 50% !important; transform: translateY(-50%) !important; background: rgba(0,0,0,0.5) !important; color: white !important; border: none !important; font-size: 40px !important; padding: 10px 20px !important; cursor: pointer !important; z-index: 1000002 !important; border-radius: 5px !important;">&#10095;</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        document.getElementById("lightboxFechar").addEventListener("click", fecharLightbox);
        document.getElementById("lightboxModal").addEventListener("click", (e) => {
            if (e.target.id === "lightboxModal") fecharLightbox();
        });

        document.getElementById("lightboxAnt").addEventListener("click", (e) => {
            e.stopPropagation(); 
            mudarFotoModal(-1);
        });

        document.getElementById("lightboxProx").addEventListener("click", (e) => {
            e.stopPropagation(); 
            mudarFotoModal(1);
        });

        document.addEventListener("keydown", (e) => {
            const modal = document.getElementById("lightboxModal");
            if (modal && modal.style.display === "flex") {
                if (e.key === "ArrowLeft") mudarFotoModal(-1);
                if (e.key === "ArrowRight") mudarFotoModal(1);
                if (e.key === "Escape") fecharLightbox();
            }
        });
    }
}

function abrirLightbox(listaImagens, indiceInicial) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    
    if (modal && modalImg && listaImagens && listaImagens.length > 0) {
        imagensDoModalAtual = listaImagens;
        indiceDaFotoNoModal = indiceInicial;
        modalImg.src = imagensDoModalAtual[indiceDaFotoNoModal];
        modal.style.setProperty('display', 'flex', 'important');
    }
}

function fecharLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.style.setProperty('display', 'none', 'important');
    }
}

function mudarFotoModal(direcao) {
    const modalImg = document.getElementById("lightboxImg");
    if (!modalImg || imagensDoModalAtual.length === 0) return;

    indiceDaFotoNoModal += direcao;
    if (indiceDaFotoNoModal >= imagensDoModalAtual.length) indiceDaFotoNoModal = 0;
    if (indiceDaFotoNoModal < 0) indiceDaFotoNoModal = imagensDoModalAtual.length - 1;

    modalImg.src = imagensDoModalAtual[indiceDaFotoNoModal];
}

// === EXECUÇÃO SEGURA SEM RE-RENDERIZAR EM LOOP INFINITO ===
const observador = new MutationObserver(() => {
    const container = document.getElementById("fazendas-container");
    const selectFiltro = document.getElementById("filtro-cultura");
    if (container && selectFiltro) {
        observador.disconnect(); // CORREÇÃO PRINCIPAL: Desconecta ANTES de renderizar para evitar loop infinito
        inicializarFiltro();
        inicializarLightbox(); 
        renderizarOsCards();
    }
});
observador.observe(document.body, { childList: true, subtree: true });

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("fazendas-container");
    if (container) {
        observador.disconnect(); // Se já carregou pelo DOM, desliga o observador secundário
        inicializarFiltro();
        inicializarLightbox(); 
        renderizarOsCards();
    }
});

// === INJEÇÃO DE CSS ===
const estiloCustomizado = document.createElement("style");
estiloCustomizado.innerHTML = `
    html, body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background-color: #e3f7fa !important;
    }
    main, .main {
        display: block !important;
        min-height: calc(100vh - 110px) !important;
        padding-bottom: 60px !important;
        box-sizing: border-box !important;
    }
    .footer {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 50px !important;
        z-index: 9999 !important;
        margin: 0 !important;
    }
    .carrossel-container{
        background-color: #1a1a1a !important;
        overflow: hidden;
    }
    .carrossel-container img,
    .carrossel-container .slide{
        object-fit: contain !important; 
        width: 100% !important;
        height: 100% !important;
    }
    .lightbox-modal {
        display: none;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        justify-content: center;
        align-items: center;
    }
    .lightbox-conteudo{
        max-width: 90%;
        max-height: 85%;
        object-fit: contain;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        border: 2px solid #fff;
        border-radius: 4px;
    }
    .lightbox-fechar{
        position: absolute;
        top: 20px;
        right: 30px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
    }
    .lightbox-fechar:hover{
        color: #bbb;
    }
    .btn-detalhes-custom{
        background-color: #198754 !important;
        color: white !important;
        padding: 8px 16px !important;
        font-size: 14px !important;
        font-weight: bold !important;
        text-decoration: none !important;
        border-radius: 5px !important;
        border: none !important;
        transition: background-color 0.2s ease-in-out !important;
        display: inline-block;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        cursor: pointer;
    }
    .btn-detalhes-custom:hover{
        background-color: #146c43 !important;
        color: #fff !important;
    }
    .modal-descricao-conteudo {
        background-color: #ffffff !important;
        padding: 30px !important;
        border-radius: 12px !important;
        max-width: 600px !important;
        width: 90% !important;
        max-height: 80vh !important;
        overflow-y: auto !important;
        position: relative !important;
        box-shadow: 0 5px 25px rgba(0,0,0,0.3) !important;
    }
    .fechar-modal-desc {
        position: absolute !important;
        top: 10px !important;
        right: 20px !important;
        font-size: 35px !important;
        font-weight: bold !important;
        color: #666 !important;
        cursor: pointer !important;
    }
    .fechar-modal-desc:hover {
        color: #000 !important;
    }
`;
document.head.appendChild(estiloCustomizado);

// === CRIAÇÃO DO POP-UP DE DESCRIÇÃO COMPLETA ===
const modalDescricao = document.createElement("div");
modalDescricao.id = "modal-descricao-custom";
modalDescricao.style.cssText = `
    display: none;
    position: fixed;
    z-index: 10050;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
`;
modalDescricao.innerHTML = `
    <div class="modal-descricao-conteudo">
        <span class="fechar-modal-desc">&times;</span>
        <div id="conteudo-texto-modal"></div>
    </div>
`;
document.body.appendChild(modalDescricao);

// === ESCUTADOR DE EVENTOS PARA ABRIR O POP-UP ===
document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("btn-abrir-desc")) {
        const idx = parseInt(e.target.getAttribute("data-index"));
        
        // CORREÇÃO: Alinhado com as fazendas globais do filtro dinâmico
        const fazendaSelecionada = fazendasGlobais[idx]; 

        if (fazendaSelecionada) {
            const textoCompleto = fazendaSelecionada.descricaoLonga || fazendaSelecionada.descricao;
            const textoFormatado = textoCompleto.replace(/\n/g, "<br>");

            document.getElementById("conteudo-texto-modal").innerHTML = `
                <h3 style="color: #198754; margin-bottom: 20px; font-weight: bold;">${fazendaSelecionada.titulo}</h3>
                <div style="font-size: 16px; line-height: 1.6; color: #333; text-align: left;">
                    ${textoFormatado}
                </div>
            `;

            document.getElementById("modal-descricao-custom").style.setProperty("display", "flex", "important");
        }
    }

    if (e.target && (e.target.classList.contains("fechar-modal-desc") || e.target.id === "modal-descricao-custom")) {
        document.getElementById("modal-descricao-custom").style.setProperty("display", "none", "important");
    }
});