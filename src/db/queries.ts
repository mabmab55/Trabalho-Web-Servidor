export const createUser =
    "CREATE TABLE user (email VARCHAR(255) NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, isAdmin BOOLEAN NOT NULL );";

export const createProducts =
    "CREATE TABLE product (id VARCHAR(255) PRIMARY KEY, model VARCHAR(255) NOT NULL, img VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL, detail TEXT,  sizes JSON, quantity INT NOT NULL);";

export const createAdmin = `
    INSERT INTO user (email, name, password, isAdmin) VALUES ("admin@email.com", "Administrador", 1234, true);`;

export const populateProducts = `
INSERT INTO 
    product (id, model, price, img, sizes, quantity, detail) 
VALUES 
    ("1", "United in Victory", 899.99, "/assets/tenis01.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Comemore o momento neste original do basquete misturado com estilo fora das quadras."),
    ("2", "Blackout", 1099.99, "/assets/tenis02.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Imagine isto: Rucker Park, Nova York. Os melhores jogadores de basquete do mundo. Dois coletivos icônicos do Hip-Hop, se enfrentando. Ia ser um dos confrontos mais lendários da história do basquete em Nova York - até que o apagão em toda a cidade em 2003 forçou o cancelamento."),
    ("3", "University", 1599.99, "/assets/tenis03.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "O que há para não amar no University Blue em um AJ1? Aquele lindo tom de azul aparece na biqueira, tornozelos e calcanhar, dando ao color block clássico uma mudança sutil."),
    ("4", "Burgundy", 1899.99, "/assets/tenis04.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Estamos trazendo de volta a Borgonha. Por que? Porque fica tão bem em AJ5s. Principalmente quando é acentuado com Light Graphite, Silver e uma sola gelada e semitransparente."),
    ("5", "Halo", 1799.99, "/assets/tenis05.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Este design excepcionalmente leve e decotado (o mesmo que impulsionou Kobe durante a temporada 2011-12) é atualizado com uma coloração tripla branca e uma inserção de espuma Nike React."),
    ("6", "Praline", 1599.99, "/assets/tenis06.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Adoce o seu visual com esta confecção sedosa. Reimaginando o primeiro tênis de sucesso de MJ, o AJ1 'Praline' combina couro premium com um toque de deleite."),
    ("7", "Stealth RESTOCK", 1099.99, "/assets/tenis07.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Prepare-se para a ocasião com um estilo que emana. Este tênis reformula a magia original de um ícone com uma silhueta de plataforma baixa."),
    ("8", "Next Chapter", 699.99, "/assets/tenis08.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Você não precisa de uma capa para voar - apenas seus AJ1s. Você sabe, aqueles vistos nos pés do Miles em “Spider-Man: Across the Spider-Verse”, exclusivamente nos cinemas em junho."),
    ("9", "Velvet Brown", 1099.99, "/assets/tenis09.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "Camurça com textura de crocodilo? Agora isso é fogo. Permitindo que você volte à era dos arremessos de gancho, joelheiras e meias até a panturrilha, esta versão elevada do Terminator Low aprimora seu jogo com materiais premium e cores limpas."),
    ("10", "Lake Bled", 1199.99, "/assets/tenis10.jpg", "[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]", 10, "A Eslovênia, país natal de Luka, é a primeira nação a ser declarada um “Destino Verde do Mundo” na sua totalidade. Comemore seu status com esta edição especial do Luka 2.");`;

export const setupQueries = [createUser, createProducts];
export const populateQueries = [createAdmin, populateProducts];
