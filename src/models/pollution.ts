import { Schema, Model, model, Document } from 'mongoose';

//interface that describes the properties
//that are required to create a new Pollution document
interface PollutionAttrs {
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}

//interface that describes the properties
//that a Pollution Model has
interface PollutionModel extends Model<PollutionDoc> {
  build(attrs: PollutionAttrs): PollutionDoc;
}

//interface that describes the properties
//that a Pollution Document has
interface PollutionDoc extends Document {
  createdAt: Date;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}

const pollutionSchema = new Schema(
  {
    createdAt: { type: Date, default: new Date() },
    aqius: { type: Number, index: true },
    mainus: { type: String },
    aqicn: { type: Number },
    maincn: { type: String },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

pollutionSchema.statics.build = (attrs: PollutionAttrs) => {
  return new Pollution(attrs);
};

const Pollution = model<PollutionDoc, PollutionModel>(
  'Pollution',
  pollutionSchema
);

export { Pollution };
