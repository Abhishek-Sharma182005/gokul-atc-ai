import tensorflow as tf
from tensorflow.keras import layers, models

def build_model(num_classes=41):
    base_model = tf.keras.applications.MobileNetV2(
        input_shape=(160, 160, 3),
        include_top=False,
        weights=None
    )
    x = layers.GlobalAveragePooling2D()(base_model.output)
    x = layers.Dropout(0.2)(x)
    outputs = layers.Dense(num_classes, activation="softmax")(x)
    return models.Model(inputs=base_model.input, outputs=outputs)
