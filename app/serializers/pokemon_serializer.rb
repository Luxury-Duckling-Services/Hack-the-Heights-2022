class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture
  has_one :activity
end
