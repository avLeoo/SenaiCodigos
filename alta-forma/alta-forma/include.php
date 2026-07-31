<?php

$parte = $_GET["parte"] ?? "";

if ($parte === "header") {
?>

    <header class="cabecalho">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a
                    class="navbar-brand"
                    href="index.html#inicio"
                    aria-label="Voltar para o início"
                >
                    <img
                        src="imagens/logo.jpeg"
                        alt="Alta Forma Academia"
                    >
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuPrincipal"
                    aria-controls="menuPrincipal"
                    aria-expanded="false"
                    aria-label="Abrir menu"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="menuPrincipal"
                >
                    <ul class="navbar-nav ms-auto align-items-lg-center">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="index.html"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="alta-forma.html"
                            >
                                Alta Forma
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="planos.html"
                            >
                                Planos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="professores.html"
                            >
                                Professores
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="fale-conosco.html"
                            >
                                Fale conosco
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
<?php
}

elseif ($parte === "footer") {
?>

    <footer class="rodape" id="contato">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 col-lg-4">
                    <img
                        src="imagens/logo.jpeg"
                        class="logo-rodape"
                        alt="Alta Forma Academia"
                    >
                    <p>
                        Treino, saúde e performance com estrutura completa
                        e acompanhamento profissional.
                    </p>

                    <div class="d-flex gap-3 mt-4">
                        <a
                            href="https://www.instagram.com/leoovieira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da Alta Forma"
                        >
                            <i class="bi bi-instagram fs-4"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/share/18D3D4QBdj/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook da Alta Forma"
                        >
                            <i class="bi bi-facebook fs-4"></i>
                        </a>
                        <a
                            href="#"
                            aria-label="WhatsApp da Alta Forma"
                        >
                            <i class="bi bi-whatsapp fs-4"></i>
                        </a>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <h3>
                        Alta Forma
                    </h3>
                    <a href="index.html">
                        Home
                    </a>
                    <a href="alta-forma.html">
                        Alta Forma
                    </a>
                    <a href="planos.html">
                        Planos
                    </a>
                    <a href="professores.html">
                        Professores
                    </a>
                    <a href="fale-conosco.html">
                        Fale Conosco
                    </a>
                </div>

                <div class="col-md-6 col-lg-4">
                    <h3>
                        Fale conosco
                    </h3>
                    <p>
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        Rua Exemplos, 123 — Centro
                    </p>
                    <p>
                        <i class="bi bi-telephone-fill me-2"></i>
                        (19) 00000-0000
                    </p>
                    <p>
                        <i class="bi bi-envelope-fill me-2"></i>
                        contato@altaforma.com
                    </p>
                    <p>
                        <i class="bi bi-clock-fill me-2"></i>
                        Segunda a sábado
                    </p>
                </div>
            </div>

            <div class="rodape-final">
                <p class="mb-0">
                    &copy; <?php echo date("Y"); ?>
                    Alta Forma Academia. Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>
<?php
}
?>