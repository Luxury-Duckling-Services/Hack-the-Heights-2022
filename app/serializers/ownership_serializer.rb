class OwnershipSerializer < ActiveModel::Serializer
  attributes :id, :level, :activity

  belongs_to :pokemon

  def activity
    self.object.pokemon.activity.name
  end
end
