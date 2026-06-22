-- Active: 1780567016181@@127.0.0.1@3306@Formation_RIL_Ex

-- 1. Requête d'insertion avec jointure: Ajoutez un nouvel employé associé à la location SEATTLE 
--(à faire proprement, mais les données insérées peuvent être des données de test)
INSERT INTO Employee (
    emp_firstname,
    emp_lastname,
    emp_job,
    emp_hire_date,
    emp_salary,
    emp_commission,
    dep_id
)
SELECT
    'PAUL',
    'DURAND',
    'TECH',
    NOW(),
    28000,
    NULL,
    d.dep_id
FROM Department d
WHERE d.dep_location = 'SEATTLE';


-- 2. Requête de mise à jour avec jointure : Ajoutez un nouveau Department 
--('RESEARCH', 'JERSEY')  + Modifiez toutes les personnes associées à NEW YORK pour les affecter à 'JERSEY'
-- Ajout du nouveau département
INSERT INTO Department (dep_name, dep_location)
VALUES ('RESEARCH', 'JERSEY');

-- Mise à jour des employés
UPDATE Employee e
JOIN Department d_old
    ON e.dep_id = d_old.dep_id
JOIN Department d_new
    ON d_new.dep_name = 'RESEARCH'
   AND d_new.dep_location = 'JERSEY'
SET e.dep_id = d_new.dep_id

SELECT
    e.emp_firstname,
    e.emp_lastname,
    d.dep_name,
    d.dep_location
FROM Employee e
JOIN Department d
    ON e.dep_id = d.dep_id
WHERE d.dep_location = 'JERSEY';

-- 3. Requête de suppression avec jointure : 
--Supprimez uniquement les employés de dont le 'lastname' est 'VERLE' qui sont associés au département 'JERSEY'.
DELETE e
FROM Employee e
JOIN Department d ON e.dep_id = d.dep_id
WHERE e.emp_lastname = 'VERLE' AND d.dep_location = 'JERSEY';

