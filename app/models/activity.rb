class Activity < ApplicationRecord
    has_many :correspondences
    has_many :pokemons, through: :correspondences
end
