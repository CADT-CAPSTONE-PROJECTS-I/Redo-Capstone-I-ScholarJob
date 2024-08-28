# Redo_Capstone1

In **FrontEnd** before run need to remove node_modules and pakage-json form Front-End directory  
using command Remove-Item -Recurse -Force node_modules, Remove-Item package-lock.json

In **Backend** need to install composer, config file env, make migratation but in migration have some error you can use some command to alter 2 the first one is table 

_ALTER TABLE jobs MODIFY responsible TEXT;
ALTER TABLE users MODIFY role_id INT DEFAULT 0;_

In jobs creation you can create categories by your own with this command in mysql

_INSERT INTO categories (title, created_at, updated_at) VALUES
('Software Engineering', NOW(), NOW()),
('Data Science', NOW(), NOW()),
('Project Management', NOW(), NOW()),
('Marketing', NOW(), NOW()),
('Sales', NOW(), NOW()),
('Human Resources', NOW(), NOW()),
('Customer Support', NOW(), NOW()),
('Finance', NOW(), NOW()),
('Legal', NOW(), NOW()),
('Product Management', NOW(), NOW());_
