CREATE TABLE Livre (
    idLivre     INTEGER          PRIMARY KEY ,
    titre       VARCHAR(255)    NOT NULL ,
    genre       VARCHAR(255)    NOT NULL ,
    auteur      VARCHAR(255)    NOT NULL
);

CREATE TABLE Adherent (
    idAdherent  INTEGER          PRIMARY KEY ,
    nom         VARCHAR(255)    NOT NULL ,
    rue         VARCHAR(200)    NOT NULL,
    no          VARCHAR(10)     NOT NULL,
    ville       VARCHAR(100)    NOT NULL,
    cPost       CHAR(6)         NOT NULL
);

CREATE TABLE Emprunt (
    idEmprunt   INTEGER           PRIMARY KEY ,
    idLivre     INTEGER         NOT NULL REFERENCES Livre(idLivre) ,
    idAdherent  INTEGER         NOT NULL REFERENCES Adherent(idAdherent),
    dateEmprunt DATE            NOT NULL ,
    dateRetour  DATE
);

-- un trigger SQLite avant chaque INSERT sur Emprunt
DROP TRIGGER IF EXISTS trg_date_retour;

CREATE TRIGGER trg_date_retour
AFTER INSERT ON Emprunt
FOR EACH ROW
WHEN NEW.dateRetour IS NULL
BEGIN
  -- date() est la fonction SQLite pour manipuler les dates
  UPDATE Emprunt
  SET dateRetour = date(NEW.dateEmprunt, '+14 days')
  WHERE rowid = NEW.rowid;
END;


CREATE TABLE Commande (
    idComande   INTEGER          PRIMARY KEY ,
    idLivre     INTEGER         NOT NULL REFERENCES Livre(idLivre) ,
    idAdherent  INTEGER         NOT NULL REFERENCES Adherent(idAdherent),
    dateCommande DATE           NOT NULL ,
    etatCommande VARCHAR(100)   NOT NULL
);

-- Index pour optimiser les jointures / filtres
CREATE INDEX idx_emprunte_livre   ON Emprunt(idLivre);
CREATE INDEX idx_emprunte_adh     ON Emprunt(idAdherent);
CREATE INDEX idx_commande_livre   ON Commande(idLivre);
CREATE INDEX idx_commande_adh     ON Commande(idAdherent);

-- Insert
INSERT INTO Livre(titre, genre, auteur) VALUES
  ('Le Petit Prince',            'Conte',      'Antoine de Saint-Exupéry'),
  ('1984',                        'Dystopie',   'George Orwell'),
  ('Le Seigneur des Anneaux',     'Fantasy',    'J.R.R. Tolkien'),
  ('Dune',                        'Science‑fic‑', 'Frank Herbert'),
  ('Harry Potter à l''école...', 'Fantasy',    'J.K. Rowling'),
  ('Crime et Châtiment',         'Classique',  'Fiodor Dostoïevski'),
  ('Les Misérables',             'Classique',  'Victor Hugo'),
  ('To Kill a Mockingbird',      'Roman',      'Harper Lee'),
  ('Orgueil et Préjugés',        'Romance',    'Jane Austen'),
  ('Le Hobbit',                  'Fantasy',    'J.R.R. Tolkien'),
  ('Les Fleurs du mal',          'Poésie',     'Charles Baudelaire'),
  ('Frankenstein',               'Gothique',   'Mary Shelley')
;

INSERT INTO Adherent(nom, rue, no, ville, cPost) VALUES
  ('Dupont',    'Rue des Fleurs',       '12',  'Montréal', 'H2X1Y4'),
  ('Martin',    'Boulevard St‑Laurent', '345', 'Montréal', 'H2X3T1'),
  ('Tremblay',  'Avenue du Parc',       '78',  'Québec',   'G1R2L9'),
  ('Roy',       'Rue Sainte‑Catherine', '210', 'Montréal', 'H3B1A7'),
  ('Gagnon',    'Chemin du Roy',        '5',   'Trois‑Rivières','G9A1P4'),
  ('Bouchard',  'Rue Notre‑Dame',       '99',  'Laval',    'H7N5P1'),
  ('Fournier',  'Rue Principale',       '150', 'Québec',   'G1V4L2'),
  ('Gauthier',  'Rue Victoria',         '22',  'Montréal', 'H2Y2E2'),
  ('Leclerc',   'Boulevard Taschereau', '310', 'Longueuil','J4L2Z8'),
  ('Pelletier', 'Rue Wellington',       '47',  'Sherbrooke','J1H2E8'),
  ('Moreau',    'Rue Saint‑Jean',       '88',  'Québec',   'G1R1P7'),
  ('Lambert',   'Rue de la Commune',    '60',  'Montréal', 'H2Y2E3')
;

INSERT INTO Emprunt(idLivre, idAdherent, dateEmprunt, dateRetour) VALUES
  (1, 1, '2025-01-01', '2025-01-15'),
  (2, 1, '2025-01-10', '2025-01-24'),
  (3, 1, '2025-02-05', '2025-02-19'),
  (4, 2, '2025-01-05', '2025-01-19'),
  (5, 2, '2025-02-01', '2025-02-15'),
  (6, 2, '2025-02-10', '2025-02-24'),
  (7, 2, '2025-03-01', '2025-03-15'),
  (8, 3, '2025-03-05', '2025-03-19'),
  (9, 4, '2025-03-10', '2025-03-24'),
  (10,5, '2025-02-15', '2025-03-01'),
  (11,6, '2025-03-12', '2025-03-26'),
  (12,7, '2025-03-20', '2025-04-03')
;

INSERT INTO Commande(idLivre, idAdherent, dateCommande, etatCommande) VALUES
  (1, 3, '2025-03-01', 'en attente'),
  (2, 4, '2025-03-05', 'expédiée'),
  (3, 5, '2025-02-20', 'livrée'),
  (4, 6, '2025-01-15', 'expédiée'),
  (5, 7, '2025-01-20', 'annulée'),
  (6, 8, '2025-02-25', 'expédiée'),
  (7, 9, '2025-03-18', 'en attente'),
  (8,10, '2025-03-22', 'livrée'),
  (9,11, '2025-03-02', 'livrée'),
  (10,12,'2025-02-28', 'annulée'),
  (11, 1,'2025-03-30','expédiée'),
  (12, 2,'2025-03-31','en attente')
;
