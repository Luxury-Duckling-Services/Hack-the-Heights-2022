class Pokemon < ApplicationRecord
    has_one :correspondence
    has_one :activity, through: :correspondence
end
