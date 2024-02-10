import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Meus Projetos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                <ProjectCard
                    src="/calma.png"
                    title="Plataforma de assessoria acadêmica"
                    description="Através desta intuitiva plataforma, o usuário pode solicitar assessoria para seus trabalhos acadêmicos, assim como comprar alguns artigos relacionados."
                />
                <ProjectCard
                    src="/BlueTech.png"
                    title="E-commerce de produtos eletrônicos"
                    description="Um moderno e responsivo e-commerce de produtos eletronicos completo "
                />
                <ProjectCard
                    src="/Criptor.png"
                    title="Aplicação para encriptar e desencriptar frases"
                    description="Ferramenta desenvolvida durante Oracle Nex Education. Através desse app, o usuário pode criptografar e desencriptografar palavras e frases."
                />
                <ProjectCard
                    src="/Dindin.png"
                    title="Plataforma de educação financeira"
                    description="Contém  dicas, artigos e vídeos para auxiliar na educação financeira."
                />
                <ProjectCard
                    src="/Porti.png"
                    title="Meu portfólio"
                    description="Simplesmente um marco na minha história e esse é só o começo"
                />
                <ProjectCard
                    src="/Omma.png"
                    title="Site de receitas"
                    description="Adoro cozinhar, então fazer esse site foi uma delícia e fiquei com fome durante todo o processo🤤🤤"
                />
            </div>
        </div>
    );
};

export default Projects;
